import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // animation: {
      //   "fade-in": "fade-in 1s ease-out forwards",
      // },
      // keyframes: {
      //   "fade-in": {
      //     "0%": {
      //       opacity: "0",
      //     },
      //     "100%": {
      //       opacity: "1",
      //     },
      //   },
      // },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
