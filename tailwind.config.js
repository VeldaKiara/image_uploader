const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     colors:{
       purple:'#7f5af0',
       pink:'#fec7d7',
       white: colors.white
     },
     extend: {},

   },
   variants: {
     extend: {},
   },
   plugins: [],
 }
