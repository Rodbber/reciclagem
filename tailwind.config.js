/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/**/*.blade.php',
     './resources/**/*.js',
     './resources/**/*.vue',
     './resources/**/**/*.vue',
     './resources/js/views/*.vue',
     './resources/js/views/**/*.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
