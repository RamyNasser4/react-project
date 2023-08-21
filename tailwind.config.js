/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        displaydown : {
          '0%' : {
              height: '0em',
              padding: '0rem'
          },
      
          '100%' : {
              height: 'fit-content'
          }
      },
      displayup : {
        '100%' : {
            height: 'fit-content',
            padding:'1rem'
        },
    
        '0%' : {
            height: '0em',
            padding: '0rem'
        }
      },
      heightopen : {
        '0%' : {

        },
        '100%' : {
          height : '5rem'
        }
      },
      heightclose : {
        '100%' : {
          height : '5rem'
        },
        '0%' : {

        }
      }
    },
    animation : {
      heightopen : 'heightopen 0.6s forwards',
      heightclose : 'heightclose 0.2s forwards',
      displaydown : 'displaydown 0.6s forwards',
      displayup: 'displayup 0.2s forwards'
    }
  },
  plugins: [],
  
}
}