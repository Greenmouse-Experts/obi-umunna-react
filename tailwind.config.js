/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        colorPrimary:"#2708A5",
        greenPrimary:"#0B6F4F"
      }
    },
  },
  plugins: [],
}

