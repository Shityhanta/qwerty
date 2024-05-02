/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#76885B',
        'custom-color-2': '#627254',
      },
    },
  },
  plugins: [],
}

