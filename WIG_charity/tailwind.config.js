/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'footer_theme': '#22262F',
        'primary_theme': '#219D80',
        'gray_theme': '#252A34'
      }
    },
  },
  plugins: [],
}

