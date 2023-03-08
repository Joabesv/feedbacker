/** @type {import('tailwindcss').Config} */
/* eslint-env node */
const palette = require('./palette.cjs');
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: palette,
    },
    fontFamily: {
      regular: ['RobotoRegular'],
      medium: ['RobotoMedium'],
      bold: ['RobotoBold'],
      black: ['RobotoBlack'],
    },
  },
  plugins: [],
};
