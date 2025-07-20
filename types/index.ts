export * from "./api"
export * from "./forms"

export interface WorkCardProps {
  src: string
  alt: string
  desc: string
  cols: number
  field: string
  onClick?: () => void
  className?: string
}

export interface WorkItem {
  index: number
  field: string
  category: string
  title: string
  description: string
  image: string
  homepage: boolean
  url?: string
  cols: number
  showImg?: string
  showImg2?: string
  showImg3?: string
  showImg4?: string
}

export interface PageProps {
  params: {
    slug: string
  }
}

export interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export interface ButtonProps {
  type?: "submit" | "reset" | "button"
  isActive?: boolean
  text: React.ReactNode
  disabled?: boolean
  className?: string
  onClick?: () => void
}
