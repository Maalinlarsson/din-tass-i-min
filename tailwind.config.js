/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,js,md}',
    './_layouts/**/*.{html,js,md}',
    './_*/*.{html,js,md}',
    './*.{html,js,md}'
  ],
  theme: {
    fontSize: {
      xs: ['0.75rem', '1.2'],
      sm: ['0.875rem;', '1.2'],
      base: ['1rem', '1.2'],
      lg: ['1.125rem;', '1.2'],
      xl: ['1.25rem', '1.2'],
      '2xl': ['1.5rem', '1.2'],
      '3xl': ['1.875rem', '1'],
      '4xl': ['2.25rem', '1'],
      '5xl': ['3rem', '1'],
      '6xl': ['3.75rem', '1'],
      '7xl': ['4.5rem', '1'],
      '8xl': ['6rem', '1'],
      '9xl': ['8rem', '1'],
    },
    fontFamily: {
      'normal': ['Karla', 'sans-serif'],
      'heading': ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        'light-green-color': '#cbd7c9',
        'dark-green-color': '#778c72',
        'beige-color': '#ede8e8',
        'white-color': '#f8f6f6'
        },
      lineHeight: {
        'tight': '.85',
        'snug': '.95',
        '12': '3rem',
      },
      spacing: {
        '5p': '5%',
        '10p': '10%',
        '15p': '15%',
        '25p': '25%',
        '50p': '50%',
        '75p': '75%',
        '100p': '100%',
        '125p': '125%',
      },
      minHeight:{
        '100': '100vh',
        '90': '90vh',
        '80': '80vh',
        '70': '70vh',
        '60': '60vh',
        '50': '50vh',
        '40': '40vh',
        '30': '30vh',
        '20': '20vh',
        '10': '10vh'
      },
      aspectRatio: {
        'landscape': '3 / 2',
        'portrait-tall': '5/8',
        'portrait': '4/5',
        '5/3': '5 / 3',
      },
    },
  },
  plugins: [
  ],
}
