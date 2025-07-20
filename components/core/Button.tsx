import React from "react"

interface ButtonProps {
  type?: "submit" | "reset" | "button"
  isActive?: boolean
  text: React.ReactNode
  disabled?: boolean
  className?: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  isActive = true,
  text,
  disabled = false,
  className = "",
  onClick,
}) => {
  const activePrimary = `border-2 border-white-primary rounded-full px-6 py-3 bg-accent-primary ${className}`
  const inactive = `border-2 border-black rounded-full px-6 py-3 ${className}`

  const buttonClass = isActive ? activePrimary : inactive

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${buttonClass} hover:bg-opacity-75 transition-all duration-150 ease-in-out-def ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
      onClick={onClick}
    >
      <span className="text-white-primary">{text}</span>
    </button>
  )
}

export default Button
