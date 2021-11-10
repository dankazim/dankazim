const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      primary:'#010D0D', /* black shade 010D0D */
      secondary:'#F4B943', /* yellow shade */
      other:'#F8F9F9', /* white shade */
      tertiary: '#010D0D',
   

      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      indigo: colors.indigo,
    },
    extend: {
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({addUtilities}) {
      const extendUnderline = {
          '.underline': {
              'textDecoration': 'underline',
              'text-decoration-color': '#F4B943',
          },
      }
      addUtilities(extendUnderline)
      }
  ]
}
