/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'meladu' : '"meladu rose"',
        'urbanist' : 'urbanist'
      },
      padding: {
        'container': '2rem 4rem',
        'in-container': '0 4rem'
      },
      colors: {
        'white-custom': '#F5F5F5',
        'black-custom': '#333332',
        'greyTxt': '#B4B4B4'
      }
    },
  },
  plugins: [],
}

