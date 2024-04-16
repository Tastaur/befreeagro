import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { ReactFC } from '../globalTypes';
import { GlobalOverride } from '../components/GlobalOverride';




const theme = createTheme();

export const ThemeWrapper: ReactFC = ({ children }) =>{
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalOverride />
      {children}
    </ThemeProvider>
  );
};