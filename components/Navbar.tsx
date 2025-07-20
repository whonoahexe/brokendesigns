"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import Lottie, { LottieRefCurrentProps } from "lottie-react"

import { getFirstWordLowercase } from "@/utils"
import logo from "@/public/brand.svg"
import Data from "@/public/data.json"
import Works from "@/components/WorkData"
import Button from "@/components/core/Button"

const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname()

  const lottieRef = useRef<LottieRefCurrentProps | null>(null)
  const [sidebarActive, setSidebarActive] = useState(false)

  const allFields = Array.from(new Set(Works.map((work) => work.field)))
  const fields = allFields.map((field) => getFirstWordLowercase(field!))

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive)
    if (lottieRef.current) {
      lottieRef.current.setDirection(sidebarActive ? -1 : 1)
      lottieRef.current.play()
    }
  }

  return (
    <div className="fixed w-full top-0 z-50">
      <div
        className={`flex justify-between items-center w-full px-16 ${fields.includes(pathname.replace(/^\//, "")) ? "py-[2.8rem] md:py-8" : "py-[2.8rem]"} backdrop-blur-md`}
      >
        <Link href="/">
          <Image src={logo} alt="Brkn." className="w-10 cursor-pointer select-none" />
        </Link>
        <div className="flex gap-4">
          {fields.includes(pathname.replace(/^\//, "")) &&
            allFields.map((field, index) => (
              <Button
                key={index}
                isActive={pathname.replace(/^\//, "") === getFirstWordLowercase(field!)}
                text={field!}
                classname="hidden md:block"
                onClick={() => router.push(`/${getFirstWordLowercase(field!)}`)}
              />
            ))}
          <Lottie
            lottieRef={lottieRef}
            animationData={Data}
            loop={false}
            autoplay={false}
            className="cursor-pointer z-10"
            onClick={toggleSidebar}
          />
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md transition-all duration-500 -z-20 ${sidebarActive ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={toggleSidebar}
      />

      <div
        className={`fixed top-0 right-0 flex items-center rounded-none lg:rounded-l-2xl w-full lg:w-3/4 h-screen transition-all ease-in-out-exp duration-1000 -z-10 bg-accent-primary ${sidebarActive ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col gap-9 pl-[20%]">
          <li onClick={toggleSidebar}>
            <Link
              href="/"
              className="text-4xl transition-all ease-in-out-def duration-150 tracking-normal text-white hover:text-[#1D1D1D] select-none"
            >
              Home
            </Link>
          </li>
          <li onClick={toggleSidebar}>
            <Link
              href="/motion"
              className="text-4xl transition-all ease-in-out-def duration-150 tracking-normal text-white hover:text-[#1D1D1D] select-none"
            >
              Work
            </Link>
          </li>
          <li onClick={toggleSidebar}>
            <Link
              href="/contact"
              className="text-4xl transition-all ease-in-out-def duration-150 tracking-normal text-white hover:text-[#1D1D1D] select-none"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
