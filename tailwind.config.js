/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    transitionProperty: false,
  },
  theme: {
    extend: {
      transitionProperty: {
        'transform': 'transform',
      },
    },
  },
}

