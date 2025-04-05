import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';

const initialCargo = [
  {
    id: 1,
    cargoId: 'ISS-001',
    type: 'Science Equipment',
    weight: 25,
    status: 'In Use',
    module: 'Columbus',
    priority: 'High',
    expirationDate: '2024-06-15',
    crew: 'Expedition 69',
    temperature: '20°C',
    pressure: '1 atm',
    radiation: 'Low',
  },
  {
    id: 2,
    cargoId: 'ISS-002',
    type: 'Crew Supplies',
    weight: 50,
    status: 'Available',
    module: 'Node 1',
    priority: 'Medium',
    expirationDate: '2024-08-20',
    crew: 'All',
    temperature: 'Ambient',
    pressure: '1 atm',
    radiation: 'Low',
  },
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

const priorities = ['Critical', 'High', 'Medium', 'Low'];

const crews = [
  'Expedition 69',
  'Expedition 70',
  'All',
];

function CargoManagement() {
  const [cargoList, setCargoList] = useState(initialCargo);
  const [open, setOpen] = useState(false);
  const [editingCargo, setEditingCargo] = useState(null);
  const [formData, setFormData] = useState({
    cargoId: '',
    type: '',
    weight: '',
    module: '',
    priority: '',
    expirationDate: '',
    crew: '',
    temperature: '',
    pressure: '',
    radiation: '',
  });

  const handleOpen = (cargo = null) => {
    if (cargo) {
      setEditingCargo(cargo);
      setFormData(cargo);
    } else {
      setEditingCargo(null);
      setFormData({
        cargoId: '',
        type: '',
        weight: '',
        module: '',
        priority: '',
        expirationDate: '',
        crew: '',
        temperature: '',
        pressure: '',
        radiation: '',
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingCargo(null);
  };

  const handleSubmit = () => {
    if (editingCargo) {
      setCargoList(
        cargoList.map((item) =>
          item.id === editingCargo.id ? { ...item, ...formData, status: item.status } : item
        )
      );
    } else {
      setCargoList([
        ...cargoList,
        {
          id: cargoList.length + 1,
          ...formData,
          status: 'Available',
        },
      ]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setCargoList(cargoList.filter((item) => item.id !== id));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Available':
        return 'success';
      case 'In Use':
        return 'warning';
      case 'Expired':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4">ISS Cargo Management</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpen()}
        >
          Add Cargo
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Cargo ID</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Weight (kg)</TableCell>
              <TableCell>Module</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Crew</TableCell>
              <TableCell>Temperature</TableCell>
              <TableCell>Pressure</TableCell>
              <TableCell>Radiation</TableCell>
              <TableCell>Expiration</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cargoList.map((cargo) => (
              <TableRow key={cargo.id}>
                <TableCell>{cargo.cargoId}</TableCell>
                <TableCell>{cargo.type}</TableCell>
                <TableCell>{cargo.weight}</TableCell>
                <TableCell>{cargo.module}</TableCell>
                <TableCell>
                  <Chip
                    label={cargo.priority}
                    color={cargo.priority === 'Critical' ? 'error' : 
                           cargo.priority === 'High' ? 'warning' : 
                           cargo.priority === 'Medium' ? 'info' : 'default'}
                    size="small"
                  />
                </TableCell>
                <TableCell>{cargo.crew}</TableCell>
                <TableCell>{cargo.temperature}</TableCell>
                <TableCell>{cargo.pressure}</TableCell>
                <TableCell>{cargo.radiation}</TableCell>
                <TableCell>{cargo.expirationDate}</TableCell>
                <TableCell>
                  <Chip
                    label={cargo.status}
                    color={getStatusColor(cargo.status)}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <IconButton
                    size="small"
                    onClick={() => handleOpen(cargo)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={() => handleDelete(cargo.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>
          {editingCargo ? 'Edit Cargo' : 'Add New Cargo'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <TextField
              label="Cargo ID"
              value={formData.cargoId}
              onChange={(e) =>
                setFormData({ ...formData, cargoId: e.target.value })
              }
              fullWidth
            />
            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select
                value={formData.type}
                label="Type"
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
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
              label="Weight (kg)"
              type="number"
              value={formData.weight}
              onChange={(e) =>
                setFormData({ ...formData, weight: e.target.value })
              }
              fullWidth
            />
            <FormControl fullWidth>
              <InputLabel>Module</InputLabel>
              <Select
                value={formData.module}
                label="Module"
                onChange={(e) =>
                  setFormData({ ...formData, module: e.target.value })
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
              <InputLabel>Priority</InputLabel>
              <Select
                value={formData.priority}
                label="Priority"
                onChange={(e) =>
                  setFormData({ ...formData, priority: e.target.value })
                }
              >
                {priorities.map((priority) => (
                  <MenuItem key={priority} value={priority}>
                    {priority}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Crew</InputLabel>
              <Select
                value={formData.crew}
                label="Crew"
                onChange={(e) =>
                  setFormData({ ...formData, crew: e.target.value })
                }
              >
                {crews.map((crew) => (
                  <MenuItem key={crew} value={crew}>
                    {crew}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Temperature Requirements"
              value={formData.temperature}
              onChange={(e) =>
                setFormData({ ...formData, temperature: e.target.value })
              }
              fullWidth
            />
            <TextField
              label="Pressure Requirements"
              value={formData.pressure}
              onChange={(e) =>
                setFormData({ ...formData, pressure: e.target.value })
              }
              fullWidth
            />
            <FormControl fullWidth>
              <InputLabel>Radiation Level</InputLabel>
              <Select
                value={formData.radiation}
                label="Radiation Level"
                onChange={(e) =>
                  setFormData({ ...formData, radiation: e.target.value })
                }
              >
                <MenuItem value="Low">Low</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="High">High</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Expiration Date"
              type="date"
              value={formData.expirationDate}
              onChange={(e) =>
                setFormData({ ...formData, expirationDate: e.target.value })
              }
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            {editingCargo ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default CargoManagement; 