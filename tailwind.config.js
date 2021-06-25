const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     colors:{
       purple:'#7f5af0',
       pink:'#fec7d7',
       white: colors.white,
       black: colors.black
     },
     fontFamily:{
       'sans':['Poppins']
     },
     extend: {
      boxShadow: ['active'],
     },

   },
   variants: {
     extend: {},
   },
   plugins: [],
 }
