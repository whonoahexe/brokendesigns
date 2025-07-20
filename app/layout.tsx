import { Suspense } from "react"
import type { Metadata } from "next"
import "material-symbols"

import "@/styles/globals.css"
import { NavigationEvents } from "@/hooks/NavigationEvents"
import ErrorBoundary from "@/components/core/ErrorBoundary"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "brkn.",
  description: "Hey! I'm Noah, a passionate self-taught motion, graphic, web designer & developer.",
  keywords: ["portfolio", "motion design", "graphic design", "web design", "ui/ux", "broken", "noah"],
  authors: [{ name: "Noah", url: "https://brkn.me/" }],
  creator: "Noah",
  publisher: "Noah",
  metadataBase: new URL("https://brkn.me/"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-black">
        <ErrorBoundary>
          <Suspense>
            <NavigationEvents />
          </Suspense>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  )
}
