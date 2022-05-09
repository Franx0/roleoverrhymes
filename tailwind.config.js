const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  important: true,
  future: {},
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './languages/*.{js}'
  ],
  theme: {
    extend: {
      colors: {
        roleover: '#b14c8c',
        accent: '#b14c8c',
      },
      backgroundColor: {
        roleover: '#b14c8c',
      },
      fontFamily: {
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
        rancho: ['Rancho', 'cursive'],
      },
    },
  },
  variants: {},
  plugins: [],
}
