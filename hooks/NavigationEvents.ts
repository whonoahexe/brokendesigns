"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

import nProgress from "nprogress"

export const NavigationEvents = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  try {
    nProgress.configure({ showSpinner: false })
    nProgress.start()
  } catch (error) {}

  useEffect(() => {
    try {
      nProgress.done()
    } catch (error) {}
  }, [pathname, searchParams])

  return null
}
