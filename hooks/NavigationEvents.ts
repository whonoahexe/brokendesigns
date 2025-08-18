"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

import nProgress from "nprogress"

export const NavigationEvents = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // configure and start progress bar only on client mount
  useEffect(() => {
    try {
      nProgress.configure({ showSpinner: false })
      nProgress.start()
    } catch (error) {}

    return () => {
      try {
        nProgress.done()
      } catch (error) {}
    }
  }, [])

  // mark progress done on navigation changes
  useEffect(() => {
    try {
      nProgress.done()
    } catch (error) {}
  }, [pathname, searchParams])

  return null
}
