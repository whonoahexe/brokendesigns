"use client"

import { useState, ChangeEvent, FormEvent } from "react"

interface UseFormProps<T extends Record<string, any>> {
  initialValues: T
  validate?: (values: T) => Partial<T>
  onSubmit?: (values: T) => Promise<void> | void
}

export const useForm = <T extends Record<string, any>>({ initialValues, validate, onSubmit }: UseFormProps<T>) => {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<Partial<T>>({})
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))

    if (errors[name as keyof T]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (validate) {
      const validationErrors = validate(values)
      setErrors(validationErrors)

      if (Object.keys(validationErrors).length > 0) {
        return
      }
    }

    if (onSubmit) {
      setIsLoading(true)
      try {
        await onSubmit(values)
      } finally {
        setIsLoading(false)
      }
    }
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setIsLoading(false)
  }

  const setFieldError = (field: keyof T, message: string) => {
    setErrors((prev) => ({ ...prev, [field]: message }))
  }

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
    reset,
    setFieldError,
    setValues,
    setErrors,
    setIsLoading,
  }
}
