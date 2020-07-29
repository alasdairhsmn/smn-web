module.exports = {
  theme: {
    container: {
      padding: {
        default: '1.5rem',
        sm: '0rem',
        lg: '0rem',
        xl: '0rem',
      },
    },
    extend: {
      colors: {
        yellow: "#fcca5b",
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
        display: ['Poppins', 'sans-serif']
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '8.5rem'
      },
      maxHeight: {
        'screen60': '60vh',
        'screen70': '70vh',
        'screen80': '80vh',
      },
      height: {
        'lg': '34rem',
        'med': '26rem',
        'sm': '18rem',
      },
      width: {
        'lg': '34rem'
      }
    }
  },
  variants: {},
  plugins: []
}
