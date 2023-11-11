/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    
    extend: {
      colors: {
        'rich-white': "rgba(255, 255, 255, 0.5)",

        'rich-black': "rgba(0, 12, 25, 1)",
        'rich-black-2': "rgba(0, 21, 35, 1)",
        'rich-black-3': "rgba(0, 26, 44, 1)",
        "prussian-blue": "rgba(0, 33, 55, 1)",
        'prussian-blue-2': "rgba(0, 37, 62, 1)",
        "prussian-blue-3": "rgba(0, 41, 69, 1)",
        "prussian-blue-4": "rgba(0, 46, 78, 1)",
        "prussian-blue-5": "rgba(0, 51, 86, 1)",
        "indigo-dye": "rgba(0, 58, 97, 1)",
        "indigo-dye-2": "rgba(0, 64, 108, 1)",


        "caribbean-current": "rgba(0, 100, 102, 1)",
        "midnight-green": "rgba(6, 90, 96, 1)",
        "midnight-green-2": "rgba(11, 82, 91, 1)",
        "midnight-green-3": "rgba(20, 69, 82, 1)",
        "charcoal": "rgba(27, 58, 75, 0.8)",
        "prussian-blue": "rgba(33, 47, 69, 0.4)",
        "space-cadet": "rgba(39, 38, 64, 1)",
        "dark-purple": "rgba(49, 34, 68, 1)",
        "dark-purple-2": "rgba(62, 31, 71, 1)",
        "palatinate": "rgba(77, 25, 77, 1)",

        "night": "rgba(11, 9, 10, 1)",
        "eerie-black": "rgba(22, 26, 29, 1)",
        "blood-red": "rgba(102, 7, 8, 1)",
        "cornell-red": "rgba(164, 22, 26, 1)",
        "cornell-red-2": "rgba(186, 24, 27, 1)",
        "imperial-red": "rgba(229, 56, 59, 1)",
        "silver": "rgba(177, 167, 166, 1)",
        "timberwolf": "rgba(211, 211, 211, 1)",
        "white-smoke": "rgba(245, 243, 244, 0.51)",
        "white": "rgba(255, 255, 255, 1)",


        "sidenav_bg": "rgba(255, 255, 255, 0.6)",
        "icon": "rgba(0, 100, 102, 1)",
        "body": "rgba(0, 100, 102, 0.2)",
        "body2": "rgba(0, 110, 112, 0.1)",
      },
      fontSize: {
        "bold_txt": "27px",
        "link_txt": "16px"
      },
      borderRadius: {
        'heero-img-bg-box': '46% 55% 14% 64% / 47% 63% 19% 56% ',
      },
      height: {
        'bg': '500px',
      },
      width: {
        'bg': '500px',
      },
      screens: {
        'sm': '300px', // phone screen 370/629
        'md': '600px', // pad screen
        'lg': '850px', // laptop screen
        'xl': '1060px', // desktop screen
        'xxl': '1460px', // desktop screen
      },
  
      keyframes: {
        'gradient-x': {
            '0%, 100%': {
                'background-size':'200% 200%',
                'background-position': 'right center'
            },
            '50%': {
                'background-size':'200% 200%',
                'background-position': 'left center'
            }
        },
      },
      animation: {
        gradient:'gradient-x 20s ease-in-out infinite',
        
      }
    },
  },
  plugins: [],
}

