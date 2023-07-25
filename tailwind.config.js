/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // class, 'media' or boolean
  theme: {
    extend: {
      spacing: {
        88: '22rem',
      },
    },
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "night", "luxury"],
  },
}