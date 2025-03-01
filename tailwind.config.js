module.exports = {
    mode: "all",
    content: ["./src/**/*.ts", "./src/**/*.tsx", "./src/**/*.jsx"],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          black: {
            light: '#313944',
            DEFAULT: '#000',
            dark: '#202a37'
          },
          white: {
            DEFAULT: '#fff'
          },
          blue: {
            light: '#4e98f1',
            DEFAULT: '#2b78d5',
            dark: '#125ab1'
          },
          navyBlue: {
            light: '#285abf',
            DEFAULT: '#123680'
          }
        },
        borderRadius: {
          '12px': '12px'
        },
        boxShadow: {
          standard: '0 0 20px rgba(0, 0, 0, 0.1)'
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  