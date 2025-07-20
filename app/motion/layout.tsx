import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Motion Design - brkn.",
  description: "Hey! I'm Noah, a passionate self-taught motion, graphic, web designer & developer.",
  keywords: ["motion design", "animation", "2D animation", "3D animation", "after effects", "visual effects"],
}

export default function MotionLayout({ children }: { children: React.ReactNode }) {
  return children
}
