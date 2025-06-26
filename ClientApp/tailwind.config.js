const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'selector',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        black: '#0E0E11',
        blackLight: '#18181C',
        primary: colors.blue,
        neutral: colors.gray,
      },
    },
  },
  plugins: [],
};
