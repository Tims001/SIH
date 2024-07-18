/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          damask: {
            50: '#FDF5E7',
            100: '#FAE9DA',
            200: '#F4CFB4',
            300: '#ECAF85',
            400: '#E48453',
            500: '#DD6531',
            600: '#C74F27',
            700: '#AC3B22',
            800: '#893123',
            900: '#6F2A17',
            950: '#3C130E',
          }
        }
      },
    },
    plugins: [],
  }