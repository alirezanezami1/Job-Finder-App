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
        gray50: '#FAFAFA',
        gray100: '#F5F5F5',
        gray200: '#EEEEEE',
        gray300: '#E0E0E0',
        gray400: '#BDBDBD',
        gray500: '#9E9E9E',
        gray600: '#757575',
        gray700: '#616161',
        gray800: '#424242',
        gray900: '#212121',
        primary100: '#E9F0FF',
        primary400: '#5089FD',
        primary500: '#246BFD',
        primary600: '#3062C8',
        primaryGradient: '#5089FF',
        primaryInfo: '#246BFD',
        error: '#F75555',
      },
      boxShadow: {
        logo: '0 0 15px rgba(59, 130, 246, 1)',
        btn: '4px 8px 24px rgba(36, 107, 253, .25)',
      },
    },
  },
  plugins: [],
}
