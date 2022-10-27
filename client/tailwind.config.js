/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "main-color" : "#2C3333",
        "secondary-color": "#E7F6F2", 
      }
    },
  },
  plugins: [],
}
