// animation constants
export const ANIMATIONS = {
  TRANSITIONS: {
    EASE_IN_OUT_DEF: "cubic-bezier(0.79,0.14,0.15,0.86)",
    EASE_IN_OUT_EXP: "cubic-bezier(.77,0,.18,1)",
    DURATION_FAST: 150,
    DURATION_NORMAL: 300,
    DURATION_SLOW: 500,
    DURATION_SIDEBAR: 1000,
  },
  FRAMER_MOTION: {
    PAGE_TRANSITION: { duration: 0.25, ease: [0.77, 0, 0.18, 1] },
    FADE_IN: { opacity: 0, y: 20 },
    FADE_IN_ANIMATE: { opacity: 1, y: 0 },
    FADE_OUT: { opacity: 0, y: -20 },
  },
}

// layout constants
export const LAYOUT = {
  CONTAINER_CLASSES: "container w-full max-w-[98%] md:max-w-[92%] px-6 md:px-12 mx-auto",
  SPACING: {
    PAGE_TOP: "mt-40 md:mt-52",
    SECTION_GAP: "mt-12",
    LARGE_GAP: "mt-24",
  },
}

// form validation
export const FORM_VALIDATION = {
  MAX_LENGTHS: {
    NAME: 100,
    EMAIL: 254,
    MESSAGE: 2000,
  },
  PATTERNS: {
    NAME: /^[a-zA-Z\s'-]+$/,
  },
}

// work categories
export const WORK_CATEGORIES = {
  MOTION: ["2D", "3D"],
  GRAPHIC: ["Branding", "Illustration", "Advertisement"],
  WEB: ["Site", "App"],
} as const

// external links
export const EXTERNAL_LINKS = {
  SOCIAL: {
    TWITTER: "https://x.com/TheBroken_XD",
    INSTAGRAM: "https://www.instagram.com/thebroken_xd/",
    DISCORD: "https://discordapp.com/users/846291281746329601",
    GITHUB: "https://github.com/whonoahexe",
  },
  EMAIL: "mailto:noah@brkn.me",
  WEBSITE: "https://brkn.me",
} as const

// color system
export const COLORS = {
  WHITE: {
    PRIMARY: "#D8DEE6",
    SECONDARY: "#E2E8F0",
    TERTIARY: "#F1F5F9",
  },
  BLACK: {
    PRIMARY: "#0C0C0D",
    SECONDARY: "#19191B",
    TERTIARY: "#212124",
  },
  ACCENT: {
    PRIMARY: "#005ac1",
  },
  HOVER: {
    GRAY: "#c4c6d0",
    DARK: "#1D1D1D",
  },
  ERROR: "#ffa4aa",
} as const
