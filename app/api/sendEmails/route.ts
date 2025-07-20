import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { ZodError } from "zod"

import { contactFormSchema, sanitizeInput, validateEmailContent, getClientIdentifier } from "@/utils/validation"
import { contactFormLimiter } from "@/utils/rateLimiter"

const corsHeaders = {
  "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGINS || "http://localhost:3000",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400",
}

const securityHeaders = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  "Content-Security-Policy": "default-src 'none'",
  "Referrer-Policy": "strict-origin-when-cross-origin",
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      ...corsHeaders,
      ...securityHeaders,
    },
  })
}

export async function POST(req: Request) {
  try {
    // check request size
    const contentLength = req.headers.get("content-length")
    if (contentLength && parseInt(contentLength) > 10000) {
      return NextResponse.json(
        {
          success: false,
          error: "Request too large",
        },
        {
          status: 413,
          headers: { ...corsHeaders, ...securityHeaders },
        },
      )
    }

    // rate limit
    const clientId = getClientIdentifier(req)
    if (contactFormLimiter.isRateLimited(clientId)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please try again later.",
          retryAfter: Math.ceil((contactFormLimiter.getResetTime(clientId) - Date.now()) / 1000),
        },
        {
          status: 429,
          headers: {
            ...corsHeaders,
            ...securityHeaders,
            "Retry-After": Math.ceil((contactFormLimiter.getResetTime(clientId) - Date.now()) / 1000).toString(),
          },
        },
      )
    }

    const body = await req.json()
    const validatedData = contactFormSchema.parse(body)

    const sanitizedData = {
      name: sanitizeInput(validatedData.name),
      email: sanitizeInput(validatedData.email),
      text: sanitizeInput(validatedData.text),
    }

    // spam detection
    if (!validateEmailContent(sanitizedData)) {
      return NextResponse.json(
        {
          success: false,
          error: "Message content not allowed",
        },
        {
          status: 400,
          headers: { ...corsHeaders, ...securityHeaders },
        },
      )
    }

    if (!process.env.MAILER_EMAIL || !process.env.MAILER_PASSWORD) {
      console.error("Missing email configuration")
      return NextResponse.json(
        {
          success: false,
          error: "Server configuration error",
        },
        {
          status: 500,
          headers: { ...corsHeaders, ...securityHeaders },
        },
      )
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.MAILER_EMAIL,
        pass: process.env.MAILER_PASSWORD,
      },
      secure: true,
      tls: {
        rejectUnauthorized: true,
      },
    })

    await transporter.verify()

    const mailOptions = {
      from: process.env.MAILER_EMAIL,
      to: process.env.MAILER_EMAIL,
      subject: "New Contact Form Submission - Portfolio",
      text: `
Contact Form Submission

Name: ${sanitizedData.name}
Email: ${sanitizedData.email}
Message: ${sanitizedData.text}

Submitted at: ${new Date().toISOString()}
      `,
      replyTo: sanitizedData.email,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { success: true },
      {
        status: 200,
        headers: { ...corsHeaders, ...securityHeaders },
      },
    )
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: error.issues.map((err: any) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        },
        {
          status: 400,
          headers: { ...corsHeaders, ...securityHeaders },
        },
      )
    }

    console.error("Email sending error:", error)

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send message",
      },
      {
        status: 500,
        headers: { ...corsHeaders, ...securityHeaders },
      },
    )
  }
}

// explicitly block other methods
export const dynamic = "force-dynamic"
export const runtime = "nodejs"

export async function GET() {
  return new NextResponse(null, { status: 405 })
}

export async function PUT() {
  return new NextResponse(null, { status: 405 })
}

export async function DELETE() {
  return new NextResponse(null, { status: 405 })
}

export async function PATCH() {
  return new NextResponse(null, { status: 405 })
}
