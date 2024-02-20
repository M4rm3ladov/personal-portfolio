/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
   // These paths are just examples, customize them to match your project structure
  purge: [
    './*.html',
  ],
  content: ['./*.{html,js}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'body': '#17171F',
        'selected-text': '#A3A3FF',
        'theme': '#3F3FFF',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35',
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      }
    },
  },
}

