import { Suspense } from "react"
import Head from "next/head"
import "material-symbols"

import "@/styles/globals.css"
import { NavigationEvents } from "@/hooks/NavigationEvents"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Head>
        <title>brkn.</title>
        <meta name="description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
        <link rel="canonical" href="https://brokendesigns.studio/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Broken - Portfolio" />
        <meta
          property="og:description"
          content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer."
        />
        <meta property="og:url" content="https://brokendesigns.studio/" />
        <meta property="og:site_name" content="Broken" />
        <meta name="twitter:title" content="Broken - Portfolio" />
        <meta
          name="twitter:description"
          content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer."
        />
        <meta name="twitter:url" content="https://brokendesigns.studio/" />
        <meta name="twitter:site" content="@TheBroken_XD" />
        <meta name="twitter:creator" content="@TheBroken_XD" />
      </Head>

      <body className="font-sans antialiased bg-black">
        <Suspense fallback={null}>
          <NavigationEvents />
        </Suspense>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
