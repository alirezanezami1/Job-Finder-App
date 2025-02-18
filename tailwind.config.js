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
      screens: {
        sm: '428px',
        md: '428px',
        lg: '428px',
        xl: '428px',
      },
      spacing: {
        'mobile-padding': '16px',
      },
      colors: {
        gray100: '#F5F5F5',
        gray400: '#BDBDBD',
        gray500: '#9E9E9E',
        gray600: '#757575',
        gray700: '#616161',
        gray900: '#212121',
        primary500: '#246BFD',
        error: '#F75555',
      },
      boxShadow: {
        logo: '0 0 15px rgba(59, 130, 246, 1)',
      },
    },
  },
  plugins: [],
}
