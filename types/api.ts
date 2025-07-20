// api response types
export interface ApiSuccessResponse<T = any> {
  success: true
  data?: T
  message?: string
}

export interface ApiErrorResponse {
  success: false
  error: string
  details?: ValidationDetail[]
  retryAfter?: number
  statusCode?: number
}

export type ApiResponse<T = any> = ApiSuccessResponse<T> | ApiErrorResponse

// rate limiting types
export interface RateLimitInfo {
  limit: number
  remaining: number
  reset: Date
  retryAfter?: number
}

// validation types
export interface ValidationDetail {
  field: string
  message: string
  code?: string
}

// email service types
export interface EmailConfig {
  from: string
  to: string
  subject: string
  html: string
  replyTo?: string
}

export interface EmailServiceResponse {
  success: boolean
  messageId?: string
  error?: string
}
