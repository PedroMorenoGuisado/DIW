/** @type {import('tailwindcss').Config} */
module.exports = {
  variants:{
    extend:{
      animation:['responsive', 'hover', 'group-hover'],
      fontSize:['responsive', 'hover', 'group-hover'],
      transform:['responsive', 'hover', 'group-hover'],
      scale:['responsive', 'hover', 'group-hover'],
    }
  },
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      dropShadow:{
        '2xl': '2px 2px 0px rgba(0, 0, 0, 0.25)',
      },
      margin: ['last'],
      screens:{
        'xs':{'max':'768px'}
      },
      backgroundImage: theme =>({
        'banner': "url('../img/bakbaner.png')"
      }),
      backgroundPosition:{
        'banner-position': "-200px -200px"
      },
      colors:{
        "azul-claro": "#37bcf9",
        "azul-oscuro": "#0370b9"
      },
      animation:{
        'spin-slow': 'spin 2s linear infinite',
        'from-below': 'fromBellow 500ms linear',
        'from-Right': 'fromRight 300ms linear'
      },
      keyframes:{
        fromBelow:{
          '0%':{transform:'translateY(0%)'},
          '50%':{transform: 'translateY(200%)'},
          '100%': {transform: 'transateY(0%)'}
        },
        fromRight:{
          '0%':{transform: 'translateX(200%)'},
          '100%':{transform: 'translateX(0%)'}
        }
      }
    },
  },
  plugins: [],
}
