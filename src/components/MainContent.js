import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Dashboard from './pages/Dashboard';
import CargoManagement from './pages/CargoManagement';
import StowagePlanning from './pages/StowagePlanning';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';

const MainContent = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - 240px)` },
        ml: { sm: '240px' },
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
      }}
    >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cargo" element={<CargoManagement />} />
        <Route path="/stowage" element={<StowagePlanning />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Box>
  );
};

export default MainContent; 