export default {
  useBorderBox: true,
  colors: {
    text: '#333',
    background: 'yellow',
  },
  fonts: {
    body: 'sans-serif',
  },
  fontSizes: [
    '0.8125rem',  // 0: 13px
    '0.875rem',   // 1: 14px
    '1rem',       // 2: 16px
    '1.125rem',   // 3: 18px
    '1.25rem',    // 4: 20px
    '1.375rem',   // 5: 22px
    '1.5rem',     // 6: 24px
    '1.875rem',   // 7: 30px
  ],
  space: [
    0,
    '0.625rem', // 10px
    '1.25rem', // 20px
    '1.875rem', // 30px
    '2.5rem', // 40px
    '3.125rem', // 50px
    '3.75rem', // 60px
    '4.375rem', // 70px
    '5rem', // 80px
  ],
  styles: {
    root: {
      fontFamily: 'body',
      '*': {
        boxSizing: 'border-box',
      },
    },
    h1: {
      fontSize: 6,
      mt: 2,
      textAlign: 'center',
    }
  }
};