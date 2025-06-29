import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

const HeaderSection = () => {
  return (
    <AppBar position="fixed" color="inherit" elevation={1} sx={{ zIndex: 1201, ml: 300 }}>
      <Toolbar>
        {/* Buscador */}
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Box sx={{ position: 'relative', borderRadius: 1, background: '#f3f6f9', mr: 2, width: 300 }}>
            <Box sx={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', color: 'grey.500' }}>
              <SearchIcon fontSize="small" />
            </Box>
            <InputBase
              placeholder="Buscar..."
              sx={{ pl: 4, width: '100%' }}
              inputProps={{ 'aria-label': 'buscar' }}
            />
          </Box>
        </Box>
        {/* Notificaciones */}
        <IconButton color="inherit" sx={{ mr: 2 }}>
          <Badge badgeContent={3} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        {/* Usuario */}
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderSection; 