/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        vazir: ['Vazir', 'sans-serif'],
      },
      width: {
        mobile: '428px',
      },
      colors: {
        gray600: '#757575',
      },
    },
  },
  plugins: [],
}
