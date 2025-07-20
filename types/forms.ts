export interface FormData {
  name: string
  email: string
  text: string
}

export interface FormErrors {
  name: string
  email: string
  text: string
  submit: string
}

export interface ContactFormProps {
  initialData?: Partial<FormData>
  onSubmitSuccess?: () => void
  onSubmitError?: (error: string) => void
}

export type { ValidationDetail, ApiResponse } from "./api"
