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
      shadow:{
        'shadow': '1px 1px 2px rgb(255 255 255)'
      },
      keyframes:{
        showIcon:{
          'from':{transform: 'translateY(-200%)'},
          'to':{transform: 'translateY(0%)'},
        },
        showCategory:{
          'from':{transform: 'translateY(-300%)', color: 'black'},
          'to':{transform: 'translateY(0%)', color: 'white'},
        }
      },
      dropShadow:{
        'sm': '0 0.1em 0.1em rgb(0 0 0 / 0.05)',
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
      },
    },
  },
  plugins: [],
}
