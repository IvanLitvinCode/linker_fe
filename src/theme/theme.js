import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#006D77',
    },
    secondary: {
      main: '#FFE66D',
    },
    background: {
      default: '#FFF',
    },
    action: {
      hover: '#F6F4EC',
      hoverOpacity: '0.1',
      selected: '#F6F4EC',
    },
    text: {
      primary: '#3E5657',
      secondary: '#A3ACAD',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': ['Roboto'],
        },
      },
    },
    h1: {
      fontSize: '6rem',
      fontWeight: 'lighter',
    },
    h2: {
      fontSize: '3.75rem',
      fontWeight: 'lighter',
    },
    h3: {
      fontSize: '3rem',
    },
    h4: {
      fontSize: '2.25rem',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: '500',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: '500',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: '500',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: '500',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
    button: {
      fontSize: '0.875rem',
      letterSpacing: '0.1em',
      fontWeight: '500',
      textTransform: 'capitalize',
    },
    caption: {
      fontSize: '0.75rem',
    },
  },
});
