import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  LinearProgress,
  Alert,
} from '@mui/material';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Sample data for various charts
const utilizationData = [
  { name: 'Week 1', utilization: 65, oxygen: 85, power: 90 },
  { name: 'Week 2', utilization: 75, oxygen: 80, power: 85 },
  { name: 'Week 3', utilization: 85, oxygen: 75, power: 80 },
  { name: 'Week 4', utilization: 70, oxygen: 70, power: 75 },
  { name: 'Week 5', utilization: 90, oxygen: 65, power: 70 },
];

const cargoTypeData = [
  { name: 'Science Equipment', value: 35 },
  { name: 'Crew Supplies', value: 25 },
  { name: 'Maintenance', value: 15 },
  { name: 'Life Support', value: 15 },
  { name: 'Other', value: 10 },
];

const monthlyCargoData = [
  { name: 'Jan', science: 40, supplies: 30, maintenance: 20 },
  { name: 'Feb', science: 35, supplies: 25, maintenance: 15 },
  { name: 'Mar', science: 45, supplies: 35, maintenance: 25 },
  { name: 'Apr', science: 50, supplies: 40, maintenance: 30 },
  { name: 'May', science: 55, supplies: 45, maintenance: 35 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

function Analytics() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        ISS Analytics Dashboard
      </Typography>

      <Alert severity="info" sx={{ mb: 3 }}>
        System performance metrics are within normal operating ranges.
      </Alert>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Module Utilization & Life Support Trends
            </Typography>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={utilizationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="utilization"
                    stroke="#8884d8"
                    name="Module Utilization (%)"
                  />
                  <Line
                    type="monotone"
                    dataKey="oxygen"
                    stroke="#82ca9d"
                    name="Oxygen Level (%)"
                  />
                  <Line
                    type="monotone"
                    dataKey="power"
                    stroke="#ffc658"
                    name="Power Level (%)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Cargo Type Distribution
            </Typography>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={cargoTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {cargoTypeData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Monthly Cargo Volume by Type
            </Typography>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyCargoData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="science" fill="#8884d8" name="Science Equipment" />
                  <Bar dataKey="supplies" fill="#82ca9d" name="Crew Supplies" />
                  <Bar dataKey="maintenance" fill="#ffc658" name="Maintenance" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Module Status Overview
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="body2" gutterBottom>
                  Node 1 Utilization
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={75}
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="body2" gutterBottom>
                  Columbus Module
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={60}
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="body2" gutterBottom>
                  Kibo Module
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={40}
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="body2" gutterBottom>
                  Destiny Module
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={85}
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Analytics; 