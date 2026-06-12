import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },

    secondary: {
      main: '#0288d1',
    },

    background: {
      default: '#f5f7fa',
    },
  },

  typography: {
    fontFamily:
      '"Roboto","Helvetica","Arial",sans-serif',

    h4: {
      fontWeight: 600,
    },

    h5: {
      fontWeight: 600,
    },

    h6: {
      fontWeight: 500,
    },
  },

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          height: '100%',
        },
      },
    },

    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
        },
      },
    },

    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
  },
});

export default theme;