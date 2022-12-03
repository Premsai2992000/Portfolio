/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        body: '#e0e1dd',
        navbar: '#0d1b2a',
        selectheader: '#778da9'
      },
      fontFamily: {
        'outfit': ['outfit']
      }
    },
  },
  plugins: [],
}
