/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")

module.exports = {
  darkMode: ["class"],
  content: [
    "src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hicontrast: "var(--color-hicontrast)",
        locontrast: "var(--color-locontrast)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        ":root": {
          "--color-hicontrast": theme("colors.black"),
          "--color-locontrast": theme("colors.white"),
        },
        ".dark": {
          "--color-hicontrast": theme("colors.white"),
          "--color-locontrast": theme("colors.black"),
        },
      })
      addComponents({})
      addUtilities({
        ".unset-all": {
          all: "unset",
        },
      })
    }),
  ],
}
