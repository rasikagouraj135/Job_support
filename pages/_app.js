import './../styles/global.css'; // Import global styles here
import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme } from '../theme';
import FloatingWhatsapp from '../components/Whatsapp';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
      <FloatingWhatsapp />
    </ThemeProvider>
  );
}
