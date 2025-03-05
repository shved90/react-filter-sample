module.exports = {
    mode: "all",
    content: ["./src/**/*.ts", "./src/**/*.tsx", "./src/**/*.jsx"],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          black: {
            lighter: '#1c1c1c',
            light: '#121212',
            DEFAULT: '#000',
            dark: '#202a37'
          },
          offwhite: {
            DEFAULT: '#aaa'
          },
          white: {
            DEFAULT: '#fff'
          },
          blue: {
            light: '#4e98f1',
            DEFAULT: '#2b78d5',
            dark: '#125ab1'
          },
          green: {
            light: '#53aa34',
            DEFAULT: '#185c01'
          },
          navyBlue: {
            lighter: '#6677aa',
            light: '#0040d7',
            DEFAULT: '#001c72'
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
  