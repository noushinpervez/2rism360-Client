/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT")

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'text': 'var(--text)',
        'inverse-text': 'var(--inverse-text)',
        'background': 'var(--background)',
        'inverse-background': 'var(--inverse-background)',
        'primary': 'var(--primary)',
        'primary-70': 'var(--primary-70)',
        'primary-10': 'var(--primary-10)',
        'secondary': 'var(--secondary)',
        'secondary-80': 'var(--secondary-80)',
        'accent': 'var(--accent)',
        'color1': 'var(--color1)',
        'color2': 'var(--color2)',
        'color3': 'var(--color3)',
        'color4': 'var(--color4)',
      },
    },
  },
  plugins: [],
});