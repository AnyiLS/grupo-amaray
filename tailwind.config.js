/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {},
    screens: {
      'max-767': {max: '767px'},
      'max-1024': {max: '1024px'}
    }
  },
  plugins: [require('flowbite/plugin')],
}