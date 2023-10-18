/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        LogoBlue:"#0575ae",
        LogoGreen:"#90aa74",
        LogoYellow:"#ee8a06",
        LogoBlueDark:"#30627b",
      }
    },
  },
  plugins: [],
}

