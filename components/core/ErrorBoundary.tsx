"use client"

import React, { ReactNode, ErrorInfo } from "react"
import { ErrorBoundary as ReactErrorBoundary, FallbackProps } from "react-error-boundary"

interface CustomErrorBoundaryProps {
  children: ReactNode
  fallback?: React.ComponentType<FallbackProps>
  onError?: (error: Error, errorInfo: ErrorInfo) => void
}

const ErrorFallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black-primary">
      <div className="text-center p-8 max-w-md">
        <div className="mb-6">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl">⚠</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h2>
          <p className="text-gray-hover">
            We apologize for the inconvenience. The application encountered an unexpected error.
          </p>
        </div>

        {process.env.NODE_ENV === "development" && error && (
          <details className="mb-6 text-left bg-black-secondary rounded-lg">
            <summary className="text-white cursor-pointer p-4 hover:bg-opacity-80 transition-all">
              OOPS! Error Details: Only for me to view XD
            </summary>
            <div className="p-4 border-t border-gray-700">
              <pre className="text-sm text-gray-hover overflow-auto whitespace-pre-wrap">
                <strong>Error:</strong> {error.message}
                {error.stack && (
                  <>
                    {"\n\n"}
                    <strong>Stack Trace:</strong>
                    {"\n"}
                    {error.stack}
                  </>
                )}
              </pre>
            </div>
          </details>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            className="bg-accent-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition-all font-medium"
            onClick={resetErrorBoundary}
          >
            Try Again
          </button>
          <button
            className="bg-gray-hover text-black px-6 py-3 rounded-lg hover:bg-opacity-80 transition-all font-medium"
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </button>
        </div>
      </div>
    </div>
  )
}

const handleError = (error: Error, errorInfo: ErrorInfo) => {
  console.error("Error Boundary caught an error:", error)
  console.error("Component stack:", errorInfo.componentStack || "No component stack available")
}

const ErrorBoundary: React.FC<CustomErrorBoundaryProps> = ({
  children,
  fallback = ErrorFallback,
  onError = handleError,
}) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={fallback}
      onError={onError}
      onReset={() => {
        console.log("Error boundary reset")
      }}
    >
      {children}
    </ReactErrorBoundary>
  )
}

export default ErrorBoundary
export { ErrorFallback }
