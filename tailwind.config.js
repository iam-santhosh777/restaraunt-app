/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React component files
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        script: ['Great Vibes', 'cursive'],
      },
    }, // Extend the default theme if needed
  },
  plugins: [],
};
