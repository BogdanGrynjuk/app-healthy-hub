const breakpoints = ['320', '834', '1440'];

export const theme = Object.freeze({
  colors: {
    white: '#FFFFFF',
    black: '#050505',
    black2: '#0F0F0F',
    violet: '#B6C3FF',
    liteGreen: '#45FFBC',
    gray: '#B6B6B6',
    gray1: '#292928',
    greenLite: '#E3FFA8',
    pink: '#FFC4F7',
    yellow: '#FFF3B7',
    error: '#E74A3B',
    correct: '#3CBC81',
  },

  fontFamily: {
    poppins: "'Poppins', sans-serif",
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },

  fontSizes: {
    xxs: '10px',
    xs: '14px',
    s: '16px',
    m: '18px',
    l: '22px',
    l2: '24px',
    xl: '30px',
    xxl: '32px',
  },

  mq: {
    mobile: `min-width: ${breakpoints[0]}px`,
    tablet: `min-width: ${breakpoints[1]}px`,
    desktop: `min-width: ${breakpoints[2]}px`,
  },

  borders: {
    none: 'none',
    normal: '1px solid',
  },

  radii: {
    normal: '12px',
  },
});
