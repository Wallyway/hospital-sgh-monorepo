import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

const menuItems = [
  { text: 'Inicio', icon: <HomeIcon />, path: '/dashboard' },
  { text: 'Perfil', icon: <PersonIcon />, path: '/profile' },
  { text: 'Configuración', icon: <SettingsIcon />, path: '/settings' },
];

const NavDesktop = () => {
  return (
    <Box
      sx={{
        width: 300,
        bgcolor: '#fff',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        boxShadow: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Logo */}
      <Box sx={{ p: 3, pb: 2, fontWeight: 'bold', fontSize: 24, letterSpacing: 1, color: 'primary.main' }}>
        SGH Dashboard
      </Box>
      <Divider />
      {/* Menú de navegación */}
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Box sx={{ p: 2, textAlign: 'center', color: 'text.secondary', fontSize: 12 }}>
        &copy; {new Date().getFullYear()} SGH
      </Box>
    </Box>
  );
};

export default NavDesktop; 