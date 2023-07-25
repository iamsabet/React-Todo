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
    
    // darkTheme: "night",
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false,
    themes: [
            "light", 
            // "dark", 
            "night", 
            // "luxury"
          ],
  },
}