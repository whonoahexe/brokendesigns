import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "col-span-1",
    "col-span-2",
    "col-span-3",
    "col-span-4",
    "col-span-5",
    "col-span-6",
    "col-span-7",
    "col-span-8",
    "col-span-9",
    "col-span-10",
    "col-span-11",
    "col-span-12",
    "lg:col-span-1",
    "lg:col-span-2",
    "lg:col-span-3",
    "lg:col-span-4",
    "lg:col-span-5",
    "lg:col-span-6",
    "lg:col-span-7",
    "lg:col-span-8",
    "lg:col-span-9",
    "lg:col-span-10",
    "lg:col-span-11",
    "lg:col-span-12",
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
      overlay: "#0008",
      black: "#000",
      white: "#fff",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
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
