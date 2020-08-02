module.exports = {
  theme: {
    container: {
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '2rem',
      },
    },
    extend: {
      colors: {
        yellow: "#fdfc71",
        lightyellow: "#ffeecf",
        rose: "#f6cccd",
        purple: "#b45aff",
        green: "#b3ffaf",
        orange: "#ff6650",
        lightgrey: "#dcdcdc",
        blue: "#1234f1",
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
        display: ['Archivo', 'sans-serif'],
        title: ['Archivo Narrow', 'sans-serif'],
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
        'screen60': '60vh',
        'screen70': '70vh',
        'screen80': '80vh',
      },
      height: {
        'lg': '30rem',
        'med': '22rem',
        'sm': '15rem',
      },
      width: {
        'lg': '34rem'
      }
    }
  },
  variants: {},
  plugins: []
}
