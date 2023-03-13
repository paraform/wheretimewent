/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [require("../../packages/ui/tailwind.config.cjs")],
    content: ["./app/**/*.{ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
};