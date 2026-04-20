/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        headline: ['Manrope', 'sans-serif'],
        label: ['Work Sans', 'sans-serif'],
        body: ['Work Sans', 'sans-serif'],
      },
      
      colors: {
        primary: '#001b3c',
        'on-primary': '#ffffff',
        'primary-container': '#002a5c',
        'on-primary-container': '#d5e3ff',
        'secondary': '#003366',
        'tertiary': '#e18600',
        'tertiary-fixed': '#e18600',
        'on-tertiary-container': '#e18600',
        surface: '#f8f9fb',
        'surface-container': '#f2f4f6',
        'surface-container-low': '#f2f4f6',
        'surface-container-lowest': '#ffffff',
        'surface-container-high': '#eceef0',
        'surface-container-highest': '#f8f9fb',
        'on-surface': '#191c1e',
        'on-surface-variant': '#43474f',
        'outline': '#79747e',
        'primary-fixed': '#d5e3ff',
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '16px', fontWeight: '400' }],
        'sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'base': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'xl': ['20px', { lineHeight: '28px', fontWeight: '500' }],
        '2xl': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        '3xl': ['28px', { lineHeight: '36px', fontWeight: '700' }],
        '4xl': ['32px', { lineHeight: '40px', fontWeight: '700' }],
        '5xl': ['36px', { lineHeight: '44px', fontWeight: '700' }],
        '6xl': ['48px', { lineHeight: '56px', fontWeight: '700' }],
        '7xl': ['56px', { lineHeight: '64px', fontWeight: '700' }],
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}