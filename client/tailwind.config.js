/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "main-color" : "#2C3333",
        "secondary-color": "#EAEAEA", 
      },
      fontFamily : {
        "montserrat" : ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
}
