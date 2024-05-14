/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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

