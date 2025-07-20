import Link from "next/link"

import { getColsClass, getFirstWordLowercase, titleToSlug } from "@/utils"

const WorkCard = ({ src, alt, desc, cols, field, onClick, className }: WorkCardProps) => {
  const colsClass = getColsClass(cols)

  return (
    <div className={`flex flex-col gap-6 ${colsClass} ${className}`}>
      <Link
        href={`${getFirstWordLowercase(field)}/${titleToSlug(alt)}`}
        className="w-full h-[415px] bg-black-tertiary rounded-[22px] cursor-pointer"
        onClick={onClick}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-[22px] transition duration-300 hover:opacity-75"
        />
      </Link>
      <div className="flex flex-col">
        <p className="font-display text-[35px] md:text-[40px] lg:text-[45px] tracking-tight" onClick={onClick}>
          <Link href={`${getFirstWordLowercase(field)}/${titleToSlug(alt)}`}>
            <span
              className="text-white hover:text-[#c4c6d0] transition-all duration-150 ease-in-out-def cursor-pointer"
              onClick={onClick}
            >
              {alt}
            </span>
          </Link>
        </p>
        <p className="text-[18px] text-white">{desc}</p>
      </div>
    </div>
  )
}

export default WorkCard
