const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  important: true,
  future: {},
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './languages/*.js'
  ],
  theme: {
    extend: {
      colors: {
        roleover: '#bc609b',
        complementary: '#60bc81',
        accent: '#bc609b',
      },
      backgroundColor: {
        roleover: '#bc609b',
        complementary: '#60bc81',
      },
      backgroundImage: {
        'star-1': "url('/images/star1.png')",
        'star-2': "url('/images/star2.png')",
        'star-3': "url('/images/star3.png')",
        'star-4': "url('/images/star4.png')",
        'genie': "url('/images/genie.png')",
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
