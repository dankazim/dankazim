module.exports = {
  purge: [
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation:{
        'pulse':'7s',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
