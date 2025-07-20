import { MetadataRoute } from "next"
import Works from "@/components/WorkData"
import { titleToSlug, getFirstWordLowercase } from "@/utils"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://brkn.me"

  // static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/motion`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/graphic`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/web`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ]

  // dynamic pages for each work item
  const workPages = Works.map((work) => ({
    url: `${baseUrl}/${getFirstWordLowercase(work.field!)}/${titleToSlug(work.title)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...workPages]
}
