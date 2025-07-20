import { z } from 'zod';

// validation schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  
  email: z
    .string()
    .trim()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(254, 'Email must be less than 254 characters')
    .toLowerCase(),
  
  text: z
    .string()
    .trim()
    .min(1, 'Message is required')
    .max(2000, 'Message must be less than 2000 characters')
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// simple sanitization
export function sanitizeInput(input: string): string {
  return input
    .replace(/<[^>]*>/g, '') // remove hmtl tags
    .replace(/javascript:/gi, '') // remove javascript urls
    .replace(/on\w+\s*=/gi, '') // remove event handlers
    .replace(/style\s*=/gi, '') // remove inline styles
    .replace(/expression\s*\(/gi, '') // remove CSS expressions
    .trim();
}

// validation for email content safety
export function validateEmailContent(data: ContactFormData): boolean {
  // Check for potential spam patterns
  const spamPatterns = [
    /(?:https?:\/\/[^\s]+.*){3,}/gi, // multiple URLs
    /(?:viagra|cialis|pharmacy|casino|lottery|prince|million|inheritance)/gi, // common spam words
    /(?:bcc|cc):\s*[^@\s]+@[^@\s]+/gi, // email injection attempts
    /content-type:\s*text\/html/gi, // html injection
    /mime-version:/gi, // mime header injection
  ];

  const fullContent = `${data.name} ${data.email} ${data.text}`;
  return !spamPatterns.some(pattern => pattern.test(fullContent));
}

// hash for ip rate limiting
export function getClientIdentifier(req: Request): string {
  // might be behind a proxy, can't always
  const forwardedFor = req.headers.get('x-forwarded-for');
  const realIp = req.headers.get('x-real-ip');
  const cfConnectingIp = req.headers.get('cf-connecting-ip');
  
  const ip = forwardedFor?.split(',')[0] || realIp || cfConnectingIp || 'unknown';
  
  return Buffer.from(ip).toString('base64').slice(0, 10);
}
