import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    background: { paper: '#1e1e1e', default: '#121212' },
    text: { primary: '#ffffff', secondary: '#bbbbbb' },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif", // Ensure Roboto is set globally
  },
});
