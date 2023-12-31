/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00C795',
        secondary: '#30D0A7',
        accent: '#707070',
        neutral: '#D9D9D9',
        medium: '#515050',
        light: '#EBEBEB',
      },
      fontFamily: {
        noto: "'Noto Serif Bengali', serif;",
        hind: "'Hind Siliguri', sans-serif",
        inter: "'Inter', sans-serif",
      },
      boxShadow: {
        '3xl': '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
      },
    },
  },
  plugins: [],
};
