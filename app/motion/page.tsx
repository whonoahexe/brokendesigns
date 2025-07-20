"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

import { getFirstWordLowercase } from "@/utils"
import Works from "@/components/WorkData"
import Button from "@/components/core/Button"
import WorkCard from "@/components/WorkCard"

const MotionPage = () => {
  const allFields = Array.from(new Set(Works.map((work) => work.field)))
  const categories = ["2D", "3D"]
  const [category, setCategory] = useState<number>(0)

  const filteredWorks = Works.filter((work) => work.field === "Motion Design" && work.category === categories[category])

  return (
    <div className="container w-full max-w-[98%] md:max-w-[92%] px-6 md:px-12 mx-auto mt-40 md:mt-52">
      <div className="col-span-full flex md:hidden gap-3">
        <div className="border-[0.5px] md:border-white-primary rounded-full flex w-full justify-center">
          {allFields.map((tab, index) => (
            <Link key={index} href={getFirstWordLowercase(tab!)}>
              <Button key={index} text={tab} isActive={tab === "Motion Design"} />
            </Link>
          ))}
        </div>
      </div>

      <div className="col-span-full flex gap-3 mt-[68px]">
        <div className="border-[0.5px] border-white-primary rounded-full">
          {categories.map((tab, index) => (
            <Button key={index} text={tab} isActive={category === index} onClick={() => setCategory(index)} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 h-full">
        <AnimatePresence mode="wait">
          {filteredWorks.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: [0.77, 0, 0.18, 1] }}
              className={`col-span-12 lg:col-span-${work.cols}`}
            >
              <WorkCard
                src={work.image}
                alt={work.title}
                desc={work.description}
                cols={work.cols}
                field={work.field!}
                className="mt-12"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default MotionPage
