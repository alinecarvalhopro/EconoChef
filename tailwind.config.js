/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          'jostLight': ['Jost-Light'],
          'jostRegular': ['Jost-Regular'],
          'jostMedium': ['Jost-Medium'],
          'jostSemibold': ['Jost-SemiBold'],
          'jostBold': ['Jost-Bold'],
        },
        colors: {
          transparent: 'transparent',
  
          bg: '#EFEEEB',
          primaryColor: '#748D7A',
          secondaryColor: '#CB753A',
          attentionColor: '#CC3B3B'
        },
      },
    },
    plugins: [],
  }