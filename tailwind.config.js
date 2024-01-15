/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js,jsx,ts,tsx}",
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    ".//**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'hero': "url('../public/images/hero.png')",
    }
  },
  plugins: [],
}

