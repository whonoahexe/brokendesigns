import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Design - brkn.",
  description: "Hey! I'm Noah, a passionate self-taught motion, graphic, web designer & developer.",
  keywords: [
    "web design",
    "ui/ux design",
    "responsive design",
    "website development",
    "user interface",
    "user experience",
  ],
}

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return children
}
