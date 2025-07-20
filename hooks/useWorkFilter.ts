"use client"

import { useState, useMemo } from "react"
import Works from "@/components/WorkData"

export const useWorkFilter = (fieldName: string, categories: string[]) => {
  const [category, setCategory] = useState<number>(0)

  const allFields = useMemo(() => Array.from(new Set(Works.map((work) => work.field))), [])

  const filteredWorks = useMemo(
    () => Works.filter((work) => work.field === fieldName && work.category === categories[category]),
    [fieldName, categories, category]
  )

  return {
    category,
    setCategory,
    allFields,
    filteredWorks,
    categories,
  }
}
