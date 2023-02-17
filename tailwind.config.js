module.exports = {
  content: ['./*.html', './src/**/*.css'],
  plugins: [require('@tailwindcss/forms')],
  theme: {
    colors: {
      white: '#f8f9fa',
      black: '#212529',
      source: {
        primary: '#ffc078',
      },
      ref: {
        primary: {
          0: '#000000',
          5: '#290400',
          10: '#2b1700',
          15: '#4f0c00',
          20: '#482a00',
          25: '#573300',
          30: '#663d00',
          35: '#774800',
          40: '#875200',
          50: '#a96800',
          60: '#c8811f',
          70: '#e79b39',
          80: '#ffb865',
          90: '#ffddba',
          95: '#ffeedf',
          98: '#fff8f4',
          99: '#fffbff',
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
