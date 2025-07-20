import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Graphic Design - brkn.",
  description: "Hey! I'm Noah, a passionate self-taught motion, graphic, web designer & developer.",
  keywords: ["graphic design", "branding", "logo design", "illustration", "advertising", "visual identity"],
}

export default function GraphicLayout({ children }: { children: React.ReactNode }) {
  return children
}
