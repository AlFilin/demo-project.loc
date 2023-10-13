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
            'site': '1920px',
            'container': '1725px',
        },
        colors: {
            'dark-blue': '#213f50',
            'orange': '#E67E21',
            'blue': '#0083bb',
            'light-yellow': '#FFF2D1',
            'brown': '#361F0F',
            'light-brown': '#361F0F',
            'bright-red': '#E34444',
            'blog1-bg': '#CA6100',
            'button': '#D89E78',
            'dull-grey': '#727070',
            'light-orange': 'rgba(202, 97, 0, 0.40)',
        },
        fontFamily: {
            'futura': ['FuturaPT-Book'],
            'morice': ['Morice-Bejar'],
            'lobster': ['Lobster-Regular'],
            'title': ['Pollock1c'],
        },
        boxShadow: {
            'card': '0px 11px 24px 0px rgba(0, 0, 0, 0.10), 0px 43px 43px 0px rgba(0, 0, 0, 0.09), 0px 97px 58px 0px rgba(0, 0, 0, 0.05), 0px 172px 69px 0px rgba(0, 0, 0, 0.01), 0px 268px 75px 0px rgba(0, 0, 0, 0.00)',
        },
        backgroundSize: {
            '300%': '300%',
        }
    },
  },
  plugins: [],
}

