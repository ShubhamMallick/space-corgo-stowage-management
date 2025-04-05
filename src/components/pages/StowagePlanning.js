import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  Alert,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Save as SaveIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';

const modules = [
  'Node 1',
  'Node 2',
  'Node 3',
  'Columbus',
  'Kibo',
  'Destiny',
  'Harmony',
  'Tranquility',
];

const cargoTypes = [
  'Science Equipment',
  'Crew Supplies',
  'Maintenance Tools',
  'Spare Parts',
  'Food',
  'Water',
  'Medical Supplies',
  'EVA Equipment',
  'Oxygen Tanks',
  'Batteries',
  'Waste Management',
  'Personal Items',
];

const initialStowagePlans = [
  {
    id: 1,
    module: 'Node 1',
    cargoType: 'Science Equipment',
    location: 'Rack 1',
    weight: 25,
    status: 'Planned',
    priority: 'High',
    temperature: '20°C',
    pressure: '1 atm',
    radiation: 'Low',
    crew: 'Expedition 69',
    notes: 'Critical research equipment',
  },
  {
    id: 2,
    module: 'Columbus',
    cargoType: 'Crew Supplies',
    location: 'Rack 2',
    weight: 50,
    status: 'In Progress',
    priority: 'Medium',
    temperature: 'Ambient',
    pressure: '1 atm',
    radiation: 'Low',
    crew: 'All',
    notes: 'General supplies',
  },
];

function StowagePlanning() {
  const [stowagePlans, setStowagePlans] = useState(initialStowagePlans);
  const [newPlan, setNewPlan] = useState({
    module: '',
    cargoType: '',
    location: '',
    weight: '',
    priority: 'Medium',
    temperature: '',
    pressure: '',
    radiation: 'Low',
    crew: 'All',
    notes: '',
  });

  const handleAddPlan = () => {
    if (newPlan.module && newPlan.cargoType && newPlan.location) {
      setStowagePlans([
        ...stowagePlans,
        {
          id: stowagePlans.length + 1,
          ...newPlan,
          status: 'Planned',
        },
      ]);
      setNewPlan({
        module: '',
        cargoType: '',
        location: '',
        weight: '',
        priority: 'Medium',
        temperature: '',
        pressure: '',
        radiation: 'Low',
        crew: 'All',
        notes: '',
      });
    }
  };

  const handleDeletePlan = (id) => {
    setStowagePlans(stowagePlans.filter((plan) => plan.id !== id));
  };

  const handleStatusChange = (id, newStatus) => {
    setStowagePlans(
      stowagePlans.map((plan) =>
        plan.id === id ? { ...plan, status: newStatus } : plan
      )
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'success';
      case 'In Progress':
        return 'warning';
      case 'Planned':
        return 'info';
      default:
        return 'default';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Critical':
        return 'error';
      case 'High':
        return 'warning';
      case 'Medium':
        return 'info';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        ISS Stowage Planning
      </Typography>

      <Alert severity="info" sx={{ mb: 3 }}>
        Current total weight distribution across modules is within safety limits.
      </Alert>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Add New Stowage Plan
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <FormControl fullWidth>
                <InputLabel>Module</InputLabel>
                <Select
                  value={newPlan.module}
                  label="Module"
                  onChange={(e) =>
                    setNewPlan({ ...newPlan, module: e.target.value })
                  }
                >
                  {modules.map((module) => (
                    <MenuItem key={module} value={module}>
                      {module}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Cargo Type</InputLabel>
                <Select
                  value={newPlan.cargoType}
                  label="Cargo Type"
                  onChange={(e) =>
                    setNewPlan({ ...newPlan, cargoType: e.target.value })
                  }
                >
                  {cargoTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                label="Location (Rack/Shelf)"
                value={newPlan.location}
                onChange={(e) =>
                  setNewPlan({ ...newPlan, location: e.target.value })
                }
                fullWidth
              />

              <TextField
                label="Weight (kg)"
                type="number"
                value={newPlan.weight}
                onChange={(e) =>
                  setNewPlan({ ...newPlan, weight: e.target.value })
                }
                fullWidth
              />

              <FormControl fullWidth>
                <InputLabel>Priority</InputLabel>
                <Select
                  value={newPlan.priority}
                  label="Priority"
                  onChange={(e) =>
                    setNewPlan({ ...newPlan, priority: e.target.value })
                  }
                >
                  <MenuItem value="Critical">Critical</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="Low">Low</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Temperature Requirements"
                value={newPlan.temperature}
                onChange={(e) =>
                  setNewPlan({ ...newPlan, temperature: e.target.value })
                }
                fullWidth
              />

              <TextField
                label="Pressure Requirements"
                value={newPlan.pressure}
                onChange={(e) =>
                  setNewPlan({ ...newPlan, pressure: e.target.value })
                }
                fullWidth
              />

              <FormControl fullWidth>
                <InputLabel>Radiation Level</InputLabel>
                <Select
                  value={newPlan.radiation}
                  label="Radiation Level"
                  onChange={(e) =>
                    setNewPlan({ ...newPlan, radiation: e.target.value })
                  }
                >
                  <MenuItem value="Low">Low</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Crew</InputLabel>
                <Select
                  value={newPlan.crew}
                  label="Crew"
                  onChange={(e) =>
                    setNewPlan({ ...newPlan, crew: e.target.value })
                  }
                >
                  <MenuItem value="Expedition 69">Expedition 69</MenuItem>
                  <MenuItem value="Expedition 70">Expedition 70</MenuItem>
                  <MenuItem value="All">All</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Notes"
                multiline
                rows={2}
                value={newPlan.notes}
                onChange={(e) =>
                  setNewPlan({ ...newPlan, notes: e.target.value })
                }
                fullWidth
              />

              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={handleAddPlan}
                disabled={!newPlan.module || !newPlan.cargoType || !newPlan.location}
              >
                Add Plan
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Current Stowage Plans
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {stowagePlans.map((plan) => (
                <Paper
                  key={plan.id}
                  sx={{
                    p: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Box>
                    <Typography variant="subtitle1">
                      {plan.module} - {plan.cargoType}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Location: {plan.location} | Weight: {plan.weight} kg
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Temperature: {plan.temperature} | Pressure: {plan.pressure} | Radiation: {plan.radiation}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Crew: {plan.crew}
                    </Typography>
                    {plan.notes && (
                      <Typography variant="body2" color="text.secondary">
                        Notes: {plan.notes}
                      </Typography>
                    )}
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <Chip
                      label={plan.status}
                      color={getStatusColor(plan.status)}
                      size="small"
                    />
                    <Chip
                      label={plan.priority}
                      color={getPriorityColor(plan.priority)}
                      size="small"
                    />
                    <Tooltip title="Mark as In Progress">
                      <IconButton
                        size="small"
                        onClick={() => handleStatusChange(plan.id, 'In Progress')}
                        disabled={plan.status === 'Completed'}
                      >
                        <WarningIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Mark as Completed">
                      <IconButton
                        size="small"
                        onClick={() => handleStatusChange(plan.id, 'Completed')}
                        disabled={plan.status === 'Completed'}
                      >
                        <CheckCircleIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete Plan">
                      <IconButton
                        size="small"
                        onClick={() => handleDeletePlan(plan.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default StowagePlanning; 