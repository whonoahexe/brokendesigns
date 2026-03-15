"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

import nProgress from "nprogress"

export const NavigationEvents = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // configure nProgress once on mount
  useEffect(() => {
    nProgress.configure({ showSpinner: false })
  }, [])

  // start progress bar when an internal link is clicked
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a")
      if (
        anchor &&
        anchor.href &&
        !anchor.target &&
        anchor.href.startsWith(window.location.origin) &&
        !anchor.href.startsWith("mailto:") &&
        anchor.href !== window.location.href
      ) {
        nProgress.start()
      }
    }

    document.addEventListener("click", handleLinkClick)
    return () => document.removeEventListener("click", handleLinkClick)
  }, [])

  // mark progress done when navigation completes
  useEffect(() => {
    nProgress.done()
  }, [pathname, searchParams])

  return null
}
