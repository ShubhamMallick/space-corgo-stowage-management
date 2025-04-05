import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Switch,
  FormControlLabel,
  TextField,
  Button,
  Grid,
  Divider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { Save as SaveIcon } from '@mui/icons-material';

function Settings() {
  const [settings, setSettings] = useState({
    notifications: true,
    autoSave: true,
    measurementUnit: 'metric',
    language: 'en',
    theme: 'light',
    maxWeightPerModule: '1000',
    defaultCargoType: 'Science Equipment',
    emergencyThreshold: '85',
    resupplyAlert: true,
    crewNotifications: true,
    groundControlAccess: true,
    dataSyncInterval: '5',
    backupFrequency: 'daily',
  });

  const handleChange = (field) => (event) => {
    setSettings({
      ...settings,
      [field]: event.target.value,
    });
  };

  const handleToggle = (field) => (event) => {
    setSettings({
      ...settings,
      [field]: event.target.checked,
    });
  };

  const handleSave = () => {
    // Here you would typically save the settings to your backend
    console.log('Saving settings:', settings);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        ISS Cargo Management Settings
      </Typography>

      <Paper sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              General Settings
            </Typography>
            <Divider sx={{ mb: 2 }} />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Language</InputLabel>
              <Select
                value={settings.language}
                label="Language"
                onChange={handleChange('language')}
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="es">Spanish</MenuItem>
                <MenuItem value="fr">French</MenuItem>
                <MenuItem value="de">German</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Theme</InputLabel>
              <Select
                value={settings.theme}
                label="Theme"
                onChange={handleChange('theme')}
              >
                <MenuItem value="light">Light</MenuItem>
                <MenuItem value="dark">Dark</MenuItem>
                <MenuItem value="system">System</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Cargo Management Settings
            </Typography>
            <Divider sx={{ mb: 2 }} />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Measurement Unit</InputLabel>
              <Select
                value={settings.measurementUnit}
                label="Measurement Unit"
                onChange={handleChange('measurementUnit')}
              >
                <MenuItem value="metric">Metric (kg, m)</MenuItem>
                <MenuItem value="imperial">Imperial (lb, ft)</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Maximum Weight per Module"
              type="number"
              value={settings.maxWeightPerModule}
              onChange={handleChange('maxWeightPerModule')}
              InputProps={{
                endAdornment: settings.measurementUnit === 'metric' ? 'kg' : 'lb',
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Default Cargo Type</InputLabel>
              <Select
                value={settings.defaultCargoType}
                label="Default Cargo Type"
                onChange={handleChange('defaultCargoType')}
              >
                <MenuItem value="Science Equipment">Science Equipment</MenuItem>
                <MenuItem value="Crew Supplies">Crew Supplies</MenuItem>
                <MenuItem value="Maintenance Tools">Maintenance Tools</MenuItem>
                <MenuItem value="Food & Water">Food & Water</MenuItem>
                <MenuItem value="Medical Supplies">Medical Supplies</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Emergency Utilization Threshold (%)"
              type="number"
              value={settings.emergencyThreshold}
              onChange={handleChange('emergencyThreshold')}
              InputProps={{
                endAdornment: '%',
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              System Preferences
            </Typography>
            <Divider sx={{ mb: 2 }} />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Data Sync Interval</InputLabel>
              <Select
                value={settings.dataSyncInterval}
                label="Data Sync Interval"
                onChange={handleChange('dataSyncInterval')}
              >
                <MenuItem value="1">1 minute</MenuItem>
                <MenuItem value="5">5 minutes</MenuItem>
                <MenuItem value="15">15 minutes</MenuItem>
                <MenuItem value="30">30 minutes</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Backup Frequency</InputLabel>
              <Select
                value={settings.backupFrequency}
                label="Backup Frequency"
                onChange={handleChange('backupFrequency')}
              >
                <MenuItem value="hourly">Hourly</MenuItem>
                <MenuItem value="daily">Daily</MenuItem>
                <MenuItem value="weekly">Weekly</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={settings.notifications}
                  onChange={handleToggle('notifications')}
                />
              }
              label="Enable System Notifications"
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={settings.autoSave}
                  onChange={handleToggle('autoSave')}
                />
              }
              label="Auto-save Changes"
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={settings.resupplyAlert}
                  onChange={handleToggle('resupplyAlert')}
                />
              }
              label="Enable Resupply Alerts"
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={settings.crewNotifications}
                  onChange={handleToggle('crewNotifications')}
                />
              }
              label="Enable Crew Notifications"
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={settings.groundControlAccess}
                  onChange={handleToggle('groundControlAccess')}
                />
              }
              label="Allow Ground Control Access"
            />
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
              <Button
                variant="contained"
                startIcon={<SaveIcon />}
                onClick={handleSave}
              >
                Save Changes
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Settings; 