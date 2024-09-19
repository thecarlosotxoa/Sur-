/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brightColor: "#F4511F",
        backgroundColor: "#b7bca9",
        lightText: "#959595",
        suraRed: "#a33a1b",
        suraGrey: "#a3aba5",
        suraBlue: "#0a4d54",
        suraWhite: "#e2dedc",
      }
    },
  },
  plugins: [],
}

