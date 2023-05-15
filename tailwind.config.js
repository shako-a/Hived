/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '5xl': '1910px',
        '1xs': '380px',
        '1xls': '410px',
        '1xlm': '510px',
      },
      fontFamily: {
        Inter: 'Inter',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        amber: {
          450: '#FBBA1B',
        },
      },
    },
  },
  plugins: [],
};
