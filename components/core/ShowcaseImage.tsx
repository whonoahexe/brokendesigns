import React from "react"

interface ShowcaseImageProps {
  src: string
  alt: string
  className?: string
}

const ShowcaseImage: React.FC<ShowcaseImageProps> = ({ src, alt, className = "" }) => {
  return (
    <div className={`w-full aspect-auto bg-black-tertiary rounded-[22px] mt-16 ${className}`}>
      <img src={`/${src}`} alt={alt} className="w-full h-full object-cover rounded-[22px]" />
    </div>
  )
}

export default ShowcaseImage
