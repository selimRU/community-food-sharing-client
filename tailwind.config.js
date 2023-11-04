/** @type {import('tailwindcss').Config} */
export default {
  // content: [
  //   "./node_modules/flowbite/**/*.js"
  // ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
  // plugins: [require("daisyui")],
}

