/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        colorPrimary:"#A4764C",
        greenPrimary:"#0B6F4F",
        
      }
      // backgroundImage: {
      //   "about-us": "url('./src/data/img/aboutus.png')",
      // },
    },
  },
  plugins: [],
})

