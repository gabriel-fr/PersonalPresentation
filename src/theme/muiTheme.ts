import { createTheme } from '@mui/material/styles';
import { colors } from './tokens';

export const muiTheme = createTheme({
  palette: {
    primary: colors.primary,
    text: colors.text,
    background: colors.background,
    divider: colors.divider,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          backgroundColor: colors.primary.main,
          color: colors.primary.contrastText,
          '&:hover': {
            backgroundColor: colors.primary.dark,
          },
        },
      },
    },
  },
});


export default muiTheme;
