/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative : true,
    files: [
    "./src/**/*.{html,js}",
  ],},
  theme: {
    extend: {
      colors: {
        customGreen: '#15977F', // Adding your custom green color
      },
    },
  },
  plugins: [],
};
