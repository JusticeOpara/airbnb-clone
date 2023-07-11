/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Montserrat', 'sans-serif'],
      }
      
      
    },
  },
  plugins: [],
}

// keyframes: {
//   shimmer: {
//     '0%': { 'background-position': '-1000px 0' },
//     '100%': { 'background-position': '1000px 0' },
//   },
// },