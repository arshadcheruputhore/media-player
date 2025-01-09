/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Default font for the entire app
        playwright: ['Playwrite CA Guides', 'serif'], // Special font
      },
    },
  },
  plugins: [],
}

