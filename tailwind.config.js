const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      primary:'#05203D',
      secondary:'#F4B943',
      tertiary: '#DCDCDB',
      other:'#FAF7F1',

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
      animation:{
        'pulse':'7s',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({addUtilities}) {
      const extendUnderline = {
          '.underline': {
              'textDecoration': 'underline',
              'text-decoration-color': '#FBBF24',
          },
      }
      addUtilities(extendUnderline)
      }
  ]
}
