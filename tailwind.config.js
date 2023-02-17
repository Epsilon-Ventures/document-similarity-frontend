module.exports = {
  content: ['./*.html', './src/**/*.css'],
  plugins: [require('@tailwindcss/forms')],
  theme: {
    colors: {
      white: '#ffffff',
      black: '353740',
      'dark-grey': '#1E1E1E',
      'light-grey': '#F2F2F2',
      source: {
        primary: '#6338ee',
      },
      ref: {
        primary: {
          0: '#010102',
          5: '#0c071d',
          10: '#170d37',
          15: '#221351',
          20: '#2d196b',
          25: '#371f85',
          30: '#42269f',
          35: '#4d2cba',
          40: '#5832d4',
          50: '#6338ee',
          60: '#6338ee',
          70: '#744ef0',
          80: '#8564f2',
          90: '#967af4',
          95: '#b9a5f7',
          98: '#ece7fd',
          99: '#fdfdff',
          100: '#ffffff',
        },
      },
    },
    fontSize: {
      'body-small': [
        '1.2rem',
        {
          lineHeight: '1.5',
          letterSpacing: '',
          fontWeight: '',
        },
      ],
      'body-medium': [
        '1.4rem',
        {
          lineHeight: '1.5',
          letterSpacing: '',
          fontWeight: '',
        },
      ],
      'body-large': [
        '2.25rem',
        {
          lineHeight: '1.5',
          letterSpacing: '0.5px',
          fontWeight: '400',
        },
      ],
      'label-small': [
        '',
        {
          lineHeight: '1.5',
          letterSpacing: '',
          fontWeight: '',
        },
      ],
      'label-medium': [
        '',
        {
          lineHeight: '1.5',
          letterSpacing: '',
          fontWeight: '',
        },
      ],
      'label-large': [
        '',
        {
          lineHeight: '1.5',
          letterSpacing: '',
          fontWeight: '',
        },
      ],
      'headline-small': [
        '1.6rem',
        {
          lineHeight: '1.2',
          letterSpacing: '0.25px',
          fontWeight: '400',
        },
      ],
      'headline-medium': [
        '2.4rem',
        {
          lineHeight: '1.2',
          letterSpacing: '',
          fontWeight: '',
        },
      ],
      'headline-large': [
        '3.2rem',
        {
          lineHeight: '1.2',
          letterSpacing: '',
          fontWeight: '',
        },
      ],
      'title-small': [
        '1.4rem',
        {
          lineHeight: '1.2',
          letterSpacing: '',
          fontWeight: '',
        },
      ],
      'title-medium': [
        '1.6rem',
        {
          lineHeight: '1.2',
          letterSpacing: '',
          fontWeight: '500',
        },
      ],
      'title-large': [
        '3rem',
        {
          lineHeight: '1.2',
          letterSpacing: '0',
          fontWeight: '400',
        },
      ],
    },
    spacing: {
      1: '1.2rem',
      2: '2.4rem',
      3: '4.8rem',
      4: '6.4rem',
      5: '9.6rem',
      6: '12.8rem',
    },
    fontFamily: {
      opensans: ['Open Sans', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {
        'responsive-grid': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
    },
  },
};
