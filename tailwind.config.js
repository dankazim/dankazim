const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      primary:'#0E1117', /* black shade 0e0e10 */
      secondary:'#FBBF24', /* yellow shade */
      other:'#E5E7EB', /* white shade */
      tertiary: '#F8FAFC',
   
      transparent: 'transparent',
      current: 'currentColor',
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
