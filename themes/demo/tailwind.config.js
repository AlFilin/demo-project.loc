/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        'layouts/**/*.htm',
        'pages/**/*.htm',
        'partials/**/*.htm',
        "./src/**/*.{js,ts,jsx,tsx}",
        "./index.htm",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        screens: {
            'mini': '362px',
            'minitwo': '430px',
            'sm': '482px',
            'smtwo': '542px',
            'md': '770px',
            'mdtwo': '994px',
            'lg': '1026px',
            '1.5lg': '1190px',
            'xl': '1282px',
            '1.3xl': '1380px',
            '1.5xl': '1540px',
            '2xl': '1645px',
        },
        extend: {
            maxWidth: {
                'site': '1920px',
                'container': '1725px',
                'block': '1650px',
                'mini': '362px',
                'minitwo': '430px',
                'sm': '482px',
                'smtwo': '542px',
                'md': '770px',
                'mdtwo': '994px',
                'lg': '1026px',
                '1.5lg': '1190px',
                'xl': '1282px',
                '1.3xl': '1380px',
                '1.5xl': '1430px',
                '2xl': '1536px',
            },
            colors: {
                'dark-blue': '#213f50',
                'orange': '#E67E21',
                'blue': '#0083bb',
                'light-yellow': '#FFF2D1',
                'white-grey': '#99A2AF',
                'light-grey': '#505967',
                'light-grey-blue': '#a2a3b1',
                'footer-gray': '#7E7E7E',
                'text-gray': '#666',
                'French-Grey': '#D1D1D8',
                'blog6': '#BCC3CE',
                'brown': '#361F0F',
                'footer-brown': '#301F13',
                'brown-header': '#D89E78',
                'Imperial-Red': '#E14B4B',
                'bright-red': '#E34444',
                'body': '#FFF6F2',
                'button': '#D89E78',
                'dull-grey': '#727070',
                'light-orange': 'rgba(202, 97, 0, 0.40)',
                'dark-blue': '#170F49',
                'blue': '#17183B',
            },
            fontFamily: {
                'futura': ['FuturaPT-Book'],
                'morice': ['Morice-Bejar'],
                'lobster': ['Lobster-Regular'],
                'title': ['Pollock1c'],
                'inter': ['Inter-Medium'],
                'DMSans': ['DMSans-Regular'],
            },
            boxShadow: {
                'card': '0px 11px 24px 0px rgba(0, 0, 0, 0.10), 0px 43px 43px 0px rgba(0, 0, 0, 0.09), 0px 97px 58px 0px rgba(0, 0, 0, 0.05), 0px 172px 69px 0px rgba(0, 0, 0, 0.01), 0px 268px 75px 0px rgba(0, 0, 0, 0.00)',
                'blok1': 'inset 0px 0px 50px 12px rgba(73 69 69 / 0.4)',
                'blog2': 'inset 0px 0px 40px 15px rgb(11 102 122 / 20%)',
                'white-blog': 'inset 0px 0px 40px 15px rgb(255 255 255 / 0.7)',
                'light-black': '0 0px 30px 0px rgb(0 0 0 / 20%)',
            },
            backgroundSize: {
                '300%': '300%',
            },
            backgroundPosition: {
                'right-1': 'center right 2rem !important',
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}

