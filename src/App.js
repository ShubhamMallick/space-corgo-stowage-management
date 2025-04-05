import React, { useState, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { BrowserRouter as Router } from 'react-router-dom';
import { lightTheme, darkTheme } from './theme';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex' }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
              <IconButton onClick={toggleDarkMode} color="inherit">
                {darkMode ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Box>
            <MainContent />
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
