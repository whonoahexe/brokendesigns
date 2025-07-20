"use client"

import { useState } from "react"

import Button from "@/components/core/Button"

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    text: "",
    email: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    text: "",
    submit: "",
  })
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: any) => {
    if (isLoading || success) {
      return
    }

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
    setErrors({
      ...errors,
      [e.target.name]: "",
      submit: "",
    })
  }

  const validateForm = () => {
    let valid = true
    let newErrors = { name: "", email: "", text: "", submit: "" }

    if (!form.name) {
      newErrors.name = "Please enter your name."
      valid = false
    }

    if (!form.email) {
      newErrors.email = "Please enter your email."
      valid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address."
      valid = false
    }

    if (!form.text) {
      newErrors.text = "Please enter your message."
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (success || isLoading) {
      return
    }
    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setErrors((prev) => ({ ...prev, submit: "" }))

    try {
      const response = await fetch("/api/sendEmails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSuccess(true)
        setForm({
          name: "",
          email: "",
          text: "",
        })
        setErrors({ name: "", email: "", text: "", submit: "" })
      } else {
        if (response.status === 429) {
          setErrors((prev) => ({
            ...prev,
            submit: data.error + (data.retryAfter ? ` Try again in ${data.retryAfter} seconds.` : ""),
          }))
        } else if (response.status === 400 && data.details) {
          const serverErrors = { name: "", email: "", text: "", submit: "" }
          data.details.forEach((detail: any) => {
            if (detail.field in serverErrors) {
              ;(serverErrors as any)[detail.field] = detail.message
            }
          })
          setErrors(serverErrors)
        } else {
          setErrors((prev) => ({
            ...prev,
            submit: data.error || "Failed to send message. Please try again.",
          }))
        }
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setErrors((prev) => ({
        ...prev,
        submit: "Network error. Please check your connection and try again.",
      }))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container w-full max-w-[98%] md:max-w-[92%] px-6 md:px-12 mx-auto mt-52">
      <p className="flex justify-center lg:justify-start w-full text-5xl md:text-8xl text-white">
        <span className="font-display bg-accent-primary rounded-full px-12">CONTACT</span>
      </p>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6 mt-12 md:mt-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="w-full">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                autoComplete="name"
                onChange={handleChange}
                disabled={isLoading || success}
                className={`w-full p-8 text-white bg-black-tertiary outline-none rounded-lg focus:bg-opacity-40 transition-all duration-150 ease-in-out-def ${
                  isLoading || success ? "opacity-50 cursor-not-allowed" : ""
                }`}
              />
              {errors.name && <p className="text-error-text">{errors.name}</p>}
            </div>
            <div className="w-full">
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                value={form.email}
                autoComplete="email"
                onChange={handleChange}
                disabled={isLoading || success}
                className={`w-full p-8 text-white bg-black-tertiary outline-none rounded-lg focus:bg-opacity-40 transition-all duration-150 ease-in-out-def ${
                  isLoading || success ? "opacity-50 cursor-not-allowed" : ""
                }`}
              />
              {errors.email && <p className="text-error-text">{errors.email}</p>}
            </div>
          </div>
          <div className="w-full">
            <textarea
              name="text"
              placeholder="Hello, I would like to..."
              value={form.text}
              autoComplete="off"
              onChange={handleChange}
              disabled={isLoading || success}
              className={`w-full p-8 text-white bg-black-tertiary outline-none rounded-lg focus:bg-opacity-40 transition-all duration-150 ease-in-out-def ${
                isLoading || success ? "opacity-50 cursor-not-allowed" : ""
              }`}
            />
            {errors.text && <p className="text-error-text">{errors.text}</p>}
          </div>
          <Button
            type="submit"
            classname="py-6"
            disabled={success || isLoading}
            text={
              success ? (
                <p className="flex justify-center items-center gap-2 w-full">
                  Submitted <span className="material-symbols-outlined">check</span>
                </p>
              ) : isLoading ? (
                <p className="flex justify-center items-center gap-2 w-full">
                  <span className="animate-spin material-symbols-outlined">progress_activity</span>
                  Sending...
                </p>
              ) : (
                "Submit"
              )
            }
          />

          {errors.submit && <p className="text-error-text text-center mt-4">{errors.submit}</p>}
        </div>
      </form>
    </div>
  )
}

export default Contact
