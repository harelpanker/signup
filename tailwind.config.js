const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      colors: { linBlack: '#454555', linBody: '#F7F7FD', linPurple: '#6A6B99' },
      dropShadow: { linShadow: '0px 2px 12px rgba(106, 107, 153, 0.15)' },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
