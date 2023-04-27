/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-mont)']
      },
      colors: {
        'mytheme': "#4BC9AB",
        "mylighttheme": '#79ECD0',
        "mygray": "#EFEFEF",
        "myred": "#C94B4B",
        "mylightred": "#E77575",
        "mydarkgray": "#D1CFCF"
      }
    },
    
  },
  plugins: [],
}