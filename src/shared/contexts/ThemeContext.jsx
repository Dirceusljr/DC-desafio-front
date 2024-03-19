/* eslint-disable react/prop-types */
import { createContext, useContext } from 'react';
import { ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';

import { Theme } from '../themes/Theme';

const ThemeContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAppThemeContext = () => {
  return useContext(ThemeContext);
}

export const AppThemeProvider = ({ children }) => {
  
  return (
    <ThemeContext.Provider value={Theme}>
      <ThemeProvider theme={Theme}>
        <Box width="100vw" height="100vh" bgcolor={Theme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
