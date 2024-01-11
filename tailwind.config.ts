import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      transitionDuration:{
        '400': '400ms',
        '600': '600ms'
      },
      width : {
        '7/10' : '70%',
        '3/10' : '30%'
      },
      height: {
        '105' : '420px',
        '115' : '460px',
        '120' : '480px',
        '185' : '740px',
        '225' : '900px'
      }
    },
    fontFamily: {
      handwrite: 'Satisfy',
      exo2: ['Exo 2', 'sans-serif'],
      Bebas: ['Bebas Neue', "cursive"],
      Shadows: ['Shadows Into Light', "cursive"],
      Fira: ['Fira Sans Condensed', "sans-serif"],
      Source: ['Source Code Pro', 'monospace'],
    }
  },
  plugins:[
    require('@tailwindcss/typography'),
  ]
}
export default config
