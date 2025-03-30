/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'natural': {
          sand: '#A99F77',
          earth: '#605931',
          sky: '#62A9D4',
          forest: '#41461A',
          mist: '#C0D0D1',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'sf-pro': ['-apple-system', 'SF Pro Display', 'SF Pro Text', 'sans-serif']
      }
    },
  },
  plugins: [],
} 