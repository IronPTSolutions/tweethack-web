/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tw-primary': '#1DA1F2',
        'tw-light-gray': '#E1E8ED',
        'tw-dark-gray': '#657786',
        'tw-dark': '#14171A',
        'tw-primary-accent': '#FFAD1F',
      },
    },
  },
  plugins: [],
}

