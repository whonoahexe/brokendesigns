import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /col-span-(1|2|3|4|5|6|7|8|9|10|11|12)/,
      variants: ["lg"],
    },
  ],
  theme: {
    colors: {
      "white-primary": "#D8DEE6",
      "white-secondary": "#E2E8F0",
      "white-tertiary": "#F1F5F9",
      "black-primary": "#0C0C0D",
      "black-secondary": "#19191B",
      "black-tertiary": "#212124",
      "accent-primary": "#005ac1",
      "gray-hover": "#c4c6d0",
      "dark-hover": "#1D1D1D",
      "error-text": "#ffa4aa",
      overlay: "#0008",
      black: "#000",
      white: "#fff",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "gradient-nav":
          "linear-gradient(270deg, rgba(18,19,20,0) 50%, #005ac1), linear-gradient(180deg, rgba(18,19,20,0) 50%, #005ac1)",
        "gradient-hero": "linear-gradient(135deg, #000 0%, #005ac1 100%)",
      },
      transitionTimingFunction: {
        "in-out-def": "cubic-bezier(0.79,0.14,0.15,0.86)",
        "in-out-exp": "cubic-bezier(.77,0,.18,1)",
      },
    },
  },
  plugins: [],
}
export default config
