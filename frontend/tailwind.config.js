/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-out': 'fadeInOut 3s infinite',
      },
      fontFamily: {
        'ubuntu': ['Ubuntu', 'san-serif'],
        'karla' : ['Karla', 'sans-serif']
      },
      colors: {
        brand: {
          'primary': '#1e88e5',
          'secondary': '#0d47a1',
          'tertiary': '#FFFFFF'
        },
      }
    },
  },
  plugins: [],
}

