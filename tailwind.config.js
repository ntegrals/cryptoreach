const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    'pages/**/*.{ts,tsx}'
  ],
  theme: {
    // extend: {
    //   fontFamily: {
    //     sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    //   }
    // }
  },
  plugins: [
    require('tailwindcss-font-inter'),
    require('tailwind-scrollbar-hide')
  ]
};
