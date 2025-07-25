"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import { ArrowUpRightIcon } from "@heroicons/react/16/solid"

import { getFirstWordLowercase } from "@/utils"
import Works from "@/components/WorkData"
import WorkCard from "@/components/WorkCard"
import Button from "@/components/core/Button"

const Page = () => {
  const titleRef = useRef<HTMLDivElement | null>(null)
  const allFields = [...Array.from(new Set(Works.map((work) => work.field))), "Coding"]
  const filteredWorks = Works.filter((work) => work.homepage === true)

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        const scrollPosition = window.scrollY
        titleRef.current.style.transform = `translateX(-${scrollPosition}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <div ref={titleRef} className="font-display hidden md:flex justify-between w-full mt-28 tracking-normal">
        <p className="text-[7.5rem] text-white">..</p>
        <p className="text-[7.5rem] text-white">BRKN.</p>
      </div>

      <div className="container w-full max-w-[98%] md:max-w-[92%] px-6 md:px-12 mx-auto mt-40 md:mt-20 lg:mt-52">
        <div className="block md:hidden mt-40">
          <p className="font-display text-7xl text-white">BRKN.</p>
        </div>
        <p className="font-display text-xl text-white mt-12 md:mt-0">
          {`👀 Oh Hello! I'm Karthikeyan (Noah, alter ego), an enthusiastic self-taught motion, graphic, web designer & developer.`}
        </p>

        <div className="flex flex-col items-center text-left md:text-center mt-16 mb-16">
          <h2 className="font-display text-2xl md:text-4xl text-white mb-8">Looking to hire me as a developer?</h2>
          <div className="flex w-full md:w-auto sm:flex-row gap-4">
            <Link href="/resume">
              <Button
                className="px-12"
                text={
                  <span className="flex items-center gap-2">
                    Hire Me
                    <ArrowUpRightIcon className="w-4 h-4" />
                  </span>
                }
              />
            </Link>
            <Link href="/contact">
              <Button
                className="px-12"
                text={
                  <span className="flex items-center gap-2">
                    Contact Me
                    <ArrowUpRightIcon className="w-4 h-4" />
                  </span>
                }
              />
            </Link>
          </div>
        </div>

        <div className="hidden md:flex justify-center lg:justify-start items-center gap-12 p-12 mt-12 rounded-lg bg-gradient-nav">
          {allFields.map((field, index) => {
            const isCoding = field === "Coding"
            const href = isCoding ? "https://github.com/whonoahexe" : getFirstWordLowercase(field!)
            const target = isCoding ? "_blank" : undefined
            const rel = isCoding ? "noopener noreferrer" : undefined

            return (
              <Link key={index} href={href} target={target} rel={rel}>
                <span className="text-xl text-white hover:text-gray-hover transition-all duration-150 ease-in-out-def">
                  {field}
                </span>
              </Link>
            )
          })}
        </div>

        <div className="block md:hidden">
          <Link href="/motion">
            <p className="font-display text-white text-lg hover:text-gray-hover transition-all duration-150 ease-in-out-def">
              see more →
            </p>
          </Link>
        </div>

        <div className="grid grid-cols-12 gap-6 h-full">
          {filteredWorks.map((work, index) => (
            <WorkCard
              key={index}
              src={work.image}
              alt={work.title}
              desc={work.description}
              cols={index === 0 ? 7 : index === 1 ? 5 : 12}
              field={work.field!}
              className="mt-12"
            />
          ))}
        </div>

        <div className="flex justify-center w-full mt-12">
          <Link href="/motion">
            <Button className="px-12" text="View More" onClick={() => {}} />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Page
