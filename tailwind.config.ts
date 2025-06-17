/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      background: {
        DEFAULT: "hsl(var(--background))",
        primary: "hsl(var(--background-primary))",
        90: "hsl(var(--background-90))",
        80: "hsl(var(--background-80))",
        70: "hsl(var(--background-70))",
        25: "hsla(var(--background-25))",
        20: "hsl(var(--background-20))",
      },
    },
  },
  plugins: [],
}
