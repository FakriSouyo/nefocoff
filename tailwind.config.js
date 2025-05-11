/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f5ff',
          100: '#e1eaff',
          200: '#c3d4fe',
          300: '#a4bcfd',
          400: '#869efb',
          500: '#6780f9',
          600: '#4a62f0',
          700: '#3d4fdd',
          800: '#1a237e', // Primary brand color
          900: '#0d1b5e', // Darker brand color
        }
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
        '20': 'repeat(20, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
};