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
        tablet: '640px',
        // => @media (min-width: 640px) { ... }

        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }

        desktop: '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
