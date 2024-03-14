/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
    },
    fontSize:{
      xs: '11.11px',
      sm: '13.33px',
      base: '16px ',
      xl: '19.02px',
      '2xl': '23.04px',
      '3xl': '27.65px',
      '4xl': '33.18px',
      '5xl': '39.81px',
      '6xl': '47.78px',

    },
    fontFamily:{
      'default': ['"Futura Now Headline"', 'sans-serif'],
      'caslon': ['"Caslon Italic"', 'serif']
    },
    colors: {
      'charcoal': '#2B2B29',
      'cream': '#F6F5F2',
      'gray': '#5A5A5A',
      'white': '#FFFFFF'
    }

  },
  
  plugins: [],
}
