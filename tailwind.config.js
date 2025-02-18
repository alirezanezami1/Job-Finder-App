/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        vazir: ['Vazir', 'sans-serif'],
      },
      screens: {
        sm: '320px',
        md: '375px',
        lg: '428px',
        xl: '480px',
      },
      width: {
        mobile: '100vw',
      },
      colors: {
        gray100: '#F5F5F5',
        gray400: '#BDBDBD',
        gray600: '#757575',
        gray700: '#616161',
        gray900: '#212121',
        primary500: '#246BFD',
        error: '#F75555',
      },
    },
  },
  plugins: [],
}
