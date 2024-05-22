/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bud-green': '#7aa65a',
      },
      backgroundImage: {
        'sky-banner': "url('img/sky-banner.png')",
      }
    },
  },
  plugins: [],
}