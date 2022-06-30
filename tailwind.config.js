/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#fafafa',
          text: '#111517',
          element: '#ffffff',
          input: '#858585',
        },
        dark: {
          bg: '#202c37',
          text: '#ffffff',
          element: '#2b3945',
        },
      },
      fontFamily: {
        body: ['Nunito'],
      },
      screens: {
        max: '1440px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
