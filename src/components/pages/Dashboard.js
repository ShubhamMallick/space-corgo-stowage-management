import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  LinearProgress,
  Card,
  CardContent,
  Alert,
  Chip,
} from '@mui/material';
import {
  LocalShipping as CargoIcon,
  Speed as SpeedIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
  Satellite as SatelliteIcon,
  BatteryAlert as BatteryIcon,
  WaterDrop as WaterIcon,
  Restaurant as FoodIcon,
} from '@mui/icons-material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Week 1', cargo: 40, utilization: 65, oxygen: 85 },
  { name: 'Week 2', cargo: 30, utilization: 75, oxygen: 80 },
  { name: 'Week 3', cargo: 45, utilization: 85, oxygen: 75 },
  { name: 'Week 4', cargo: 35, utilization: 70, oxygen: 70 },
  { name: 'Week 5', cargo: 50, utilization: 90, oxygen: 65 },
];

const StatCard = ({ title, value, icon, color, subtitle }) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        {icon}
        <Typography variant="h6" component="div" sx={{ ml: 1 }}>
          {title}
        </Typography>
      </Box>
      <Typography variant="h4" component="div" sx={{ color }}>
        {value}
      </Typography>
      {subtitle && (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {subtitle}
        </Typography>
      )}
    </CardContent>
  </Card>
);

function Dashboard() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        ISS Cargo Management Dashboard
      </Typography>

      <Alert severity="warning" sx={{ mb: 3 }}>
        Next resupply mission scheduled in 5 days. Critical items need to be prioritized.
      </Alert>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Cargo Items"
            value="156"
            icon={<CargoIcon sx={{ color: '#1976d2' }} />}
            color="#1976d2"
            subtitle="Across all modules"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Module Utilization"
            value="78%"
            icon={<SpeedIcon sx={{ color: '#2e7d32' }} />}
            color="#2e7d32"
            subtitle="Average across modules"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Critical Alerts"
            value="3"
            icon={<WarningIcon sx={{ color: '#d32f2f' }} />}
            color="#d32f2f"
            subtitle="Requires immediate attention"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Next Resupply"
            value="5d"
            icon={<SatelliteIcon sx={{ color: '#ed6c02' }} />}
            color="#ed6c02"
            subtitle="CRS-28 mission"
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Module Utilization & Oxygen Levels
            </Typography>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="utilization" fill="#1976d2" name="Utilization (%)" />
                  <Bar dataKey="oxygen" fill="#82ca9d" name="Oxygen Level (%)" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Module Status
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" gutterBottom>
                Node 1 Utilization
              </Typography>
              <LinearProgress
                variant="determinate"
                value={75}
                sx={{ height: 10, borderRadius: 5 }}
              />
            </Box>
            <Box sx={{ mt: 3 }}>
              <Typography variant="body2" gutterBottom>
                Columbus Module
              </Typography>
              <LinearProgress
                variant="determinate"
                value={60}
                sx={{ height: 10, borderRadius: 5, mb: 1 }}
              />
              <Typography variant="body2" gutterBottom>
                Kibo Module
              </Typography>
              <LinearProgress
                variant="determinate"
                value={40}
                sx={{ height: 10, borderRadius: 5 }}
              />
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Critical Resources Status
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <WaterIcon color="primary" />
                  <Typography>Water Reserves: 85%</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <FoodIcon color="primary" />
                  <Typography>Food Supplies: 70%</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <BatteryIcon color="primary" />
                  <Typography>Power Status: 90%</Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard; 