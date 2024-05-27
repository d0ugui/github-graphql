/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2f80ed",
        secondary: "#878790",
        done: "#26B144",
        danger: "#FF0000",
        desc: "#9699B0",
        heart: "#EB5757",
      }
    },
  },
  plugins: [],
}

