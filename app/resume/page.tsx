"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRightIcon } from "@heroicons/react/16/solid"
import Button from "@/components/core/Button"

const ResumePage = () => {
  const [isLoading, setIsLoading] = useState(true)

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Karthikeyan_Noah_Resume.pdf"
    link.click()
  }

  return (
    <div className="min-h-screen bg-black-primary">
      <div className="container w-full max-w-[98%] md:max-w-[92%] px-6 md:px-12 mx-auto pt-32">
        <div className="text-center mb-8">
          <h1 className="font-display text-4xl md:text-6xl text-white mb-4">Resume</h1>
        </div>

        {/* pdf viewer */}
        <div className="relative w-full bg-white rounded-lg overflow-hidden" style={{ height: "80vh" }}>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-primary mx-auto mb-4"></div>
                <p className="font-display text-white">Loading resume...</p>
              </div>
            </div>
          )}
          <iframe
            src="/resume.pdf"
            width="100%"
            height="100%"
            onLoad={handleIframeLoad}
            className="border-none"
            title="Karthikeyan Resume"
          >
            <p className="text-center text-gray-600 p-8">
              Your browser doesn't support PDF viewing.
              <Button text="Download PDF instead" onClick={handleDownload} className="ml-4" />
            </p>
          </iframe>
        </div>

        <div className="text-center pt-12 pb-12">
          <p className="text-white text-lg mb-4">Interested in working together?</p>
          <Link href="/contact">
            <Button
              text={
                <span className="flex items-center gap-2">
                  Get in Touch
                  <ArrowUpRightIcon className="w-4 h-4" />
                </span>
              }
              onClick={() => {}}
              className="px-8"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ResumePage
