export const titleToSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

const titleMap: { [key: string]: string } = {
  saga: "Saga - Event Promo",
  ios: "iOS 16 - A Concept",
  ampersand: "Ampersand - Music Cover",
  jayant: "Jayant - Promo",
  explorations: "AE Explorations",
  chakras: "Chakras - Intro",
  glass: "Google Glass - Concept",
  bpf: "BPF - Best Price Forex",
  noods: "Send Noods - Food Delivery",
  synx: "SynX",
  wad: "WAD 2023",
  anshika: "Anshika - Portfolio",
}

export const slugToTitle = (slug: string): string => {
  for (const key in titleMap) {
    if (slug.includes(key)) {
      return titleMap[key]
    }
  }
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export const getFirstWordLowercase = (field: string) => {
  const firstWord = field.split(" ")[0]
  return firstWord.charAt(0).toLowerCase() + firstWord.slice(1)
}

export const getColsClass = (cols: number): string => {
  if (cols >= 1 && cols <= 12) {
    return `col-span-12 lg:col-span-${cols}`
  } else {
    return "col-span-1"
  }
}
