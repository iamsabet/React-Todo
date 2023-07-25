/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // class, 'media' or boolean
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
        
        green: {
          100: "#cdeae1",
          200: "#9bd5c3",
          300: "#69c0a5",
          400: "#37ab87",
          500: "#059669",
          600: "#047854",
          700: "#035a3f",
          800: "#023c2a",
          900: "#011e15"
        },
       
      },
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