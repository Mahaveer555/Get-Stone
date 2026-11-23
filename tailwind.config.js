/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        arthemis: ['Arthemis', 'serif'],
        exthing: ['Exthing', 'cursive'],
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        'accent': '#8a6a1f',
        'accent-light': '#b08b35',
        'accent-dark': '#6d5317',
        'primary-dark': '#2c2c2c',
      },
    },
  },
  plugins: [],
}
