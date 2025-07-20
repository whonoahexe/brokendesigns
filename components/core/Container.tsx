import React from "react"

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`container w-full max-w-[98%] md:max-w-[92%] px-6 md:px-12 mx-auto mt-40 md:mt-52 ${className}`}>
      {children}
    </div>
  )
}

export default Container
