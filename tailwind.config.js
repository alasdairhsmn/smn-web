module.exports = {
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '1rem',
        xl: '2rem',
      },
    },
    extend: {
      borderWidth: {
        '3': '3px',
      },
      colors: {
        yellow: "#fdfc71",
        lightyellow: "#FEF6A5",
        rose: "#f6cccd",
        purple: "#793FFF",
        orange: "#ff6650",
        lightgrey: "#dcdcdc",
        midgrey: "#B4B4B4",
        blue: "#793FFF",
        green: "#05FABD",
        red: "#FE546E",
        darkblue: '#000033',
      },
      fontFamily: {
        sans: ['forma-djr-text', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
        display: ['Archivo', 'sans-serif'],
        title: ['obviously-narrow', 'Arial Narrow', 'Impact', 'sans-serif'],
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '8rem',
        '11xl': '9rem',
        '12xl': '10rem',
        '13xl': '11rem',
        '14xl': '12rem',
        '15xl': '13rem',
        '16xl': '14rem',
        '17xl': '15rem',
        '18xl': '16rem',
        '19xl': '17rem',
        '20xl': '18rem',
      },
      lineHeight: {
       'extra-tight': '0.9',
      },
      minHeight: {
        'screen50':'50vh',
        'screen60': '60vh',
        'screen70': '70vh',
        'screen80': '80vh',
        'screen90': '90vh',
      },
      maxHeight: {
        'lg': '30rem',
        'med': '22rem',
        'sm': '15rem',
        'screen50': '50vh',
        'screen60': '60vh',
        'screen70': '70vh',
        'screen80': '80vh',
        'screen90': '90vh',
      },
      height: {
        'lg': '30rem',
        'med': '22rem',
        'sm': '15rem',
        'screen50': '50vh',
        'screen60': '60vh',
        'screen70': '70vh',
        'screen80': '80vh',
        'screen90': '90vh',
      },
      maxWidth: {
        '24': '24rem',
        '29': '29rem',
        'xl': '50rem',
      },
      width: {
        'lg': '34rem'
      }
    }
  },
  variants: {},
  plugins: [],
  purge: [
    './src/components/**/*.js',
    './src/pages/**/*.js'
  ]
}
