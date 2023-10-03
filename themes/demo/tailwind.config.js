/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'layouts/**/*.htm',
    'pages/**/*.htm',
    'partials/**/*.htm',
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.htm",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

