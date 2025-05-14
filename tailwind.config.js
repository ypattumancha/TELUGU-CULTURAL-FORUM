/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef4f1',
          100: '#fde8e2',
          200: '#fbd0c5',
          300: '#f9b8a8',
          400: '#f79b72', // Header color
          500: '#f47d4d',
          600: '#e85f2b',
          700: '#d14a1c',
          800: '#ac3c19',
          900: '#8c331a',
          950: '#4b180b',
        },
        secondary: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdca8',
          300: '#ffc370',
          400: '#ffa033',
          500: '#ff841a',
          600: '#ff6500',
          700: '#cc4d02',
          800: '#a23c0b',
          900: '#84330d',
          950: '#471705',
        },
        accent: {
          50: '#f9f5ff',
          100: '#f1e8ff',
          200: '#e4d5ff',
          300: '#d0b5ff',
          400: '#b588ff',
          500: '#9a55ff',
          600: '#882af8',
          700: '#7617e4',
          800: '#6317c0',
          900: '#53159c',
          950: '#330a69',
        },
        success: {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#10b981',
          700: '#047857',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          700: '#b45309',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          700: '#b91c1c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'scale': 'scale 0.2s ease-in-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'pulse-subtle': 'pulseSubtle 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scale: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(247,155,114,0.2)' },
          '50%': { boxShadow: '0 0 20px rgba(247,155,114,0.4)' },
        },
      },
    },
  },
  plugins: [],
};