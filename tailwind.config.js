const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  important: true,
  future: {},
  content: [
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
        rancho: ['Rancho', 'cursive'],
      },
    },
  },
  variants: {},
  plugins: [],
}
