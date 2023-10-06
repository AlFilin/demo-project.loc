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
    extend: {
        maxWidth: {
            'site': '1200px',
            'container': '1140px',
        },
        colors: {
            'dark-blue': '#213f50',
            'orange': '#E67E21',
            'blue': '#0083bb',
            'light-yellow': '#FFF2D1',
        }
    },
  },
  plugins: [],
}

