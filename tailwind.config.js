/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'lg': { 'max': '992px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '480px' }
    },
    container: {
      padding: '20px',
      center: true
    },
    extend: {
      colors: {
        lightred: '#ff0d38',
        middlered: '#d70026',
        lightblack: '#4d4244',
        customgray: '#272727',
        lightgray: '#454545'
      },
      height: {
        '3px': '3px'
      },
      letterSpacing: {
        custonNarrow: '-0.6px'
      }
    },
  },
  plugins: [],
}

