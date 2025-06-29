import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import CancelIcon from '@mui/icons-material/Cancel';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

interface MenuItem {
  text: string;
  icon: React.ReactNode;
}

interface NavDesktopProps {
  avatarUrl: string;
  nombre: string;
  onSidebarClick?: (text: string) => void;
  menuItems?: MenuItem[];
}

const defaultMenuItems: MenuItem[] = [
  { text: 'Dashboard', icon: <DashboardIcon /> },
  { text: 'Agenda cita', icon: <EventNoteIcon /> },
  { text: 'Citas pendientes', icon: <PendingActionsIcon /> },
  { text: 'Cancelar citas', icon: <CancelIcon /> },
  { text: 'Modificar sus datos', icon: <ManageAccountsIcon /> },
  { text: 'Ver historial clínico', icon: <AssignmentIcon /> },
];

const NavDesktop: React.FC<NavDesktopProps> = ({ avatarUrl, nombre, onSidebarClick, menuItems }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [popoverText, setPopoverText] = useState('');
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  let items = menuItems || defaultMenuItems;
  let sortedItems = items;
  let listSx = { width: '100%', flexGrow: 1 };
  let listStyle = undefined;
  if (menuItems) {
    sortedItems = [
      ...items.filter((item) => item.text === 'Dashboard'),
      ...items.filter((item) => item.text !== 'Dashboard'),
    ];
    listSx = { width: '100%', flexGrow: 1 };
    listStyle = { overflowY: 'auto' as 'auto', overflowX: 'hidden' as 'hidden', maxHeight: 'calc(90vh - 180px)' };
  }

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>, text: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setAnchorEl(event.currentTarget);
    setPopoverText(text);
  };

  const handlePopoverClose = () => {
    closeTimeout.current = setTimeout(() => {
      setAnchorEl(null);
      setPopoverText('');
    }, 120);
  };

  return (
    <Box
      sx={{
        width: 80,
        bgcolor: '#fff',
        height: '90vh',
        position: 'relative',
        top: 32,
        left: 32,
        borderRadius: 4,
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 2,
        transition: 'width 0.2s',
      }}
    >
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
        <Avatar src={avatarUrl} alt={nombre} sx={{ width: 48, height: 48, mb: 1 }} />
      </Box>
      <Divider sx={{ width: '100%', mb: 1 }} />
      <List sx={listSx} style={listStyle}>
        {sortedItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                width: 80,
                height: 80,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
              onMouseEnter={(e) => handlePopoverOpen(e, item.text)}
              onMouseLeave={handlePopoverClose}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                onClick={() => onSidebarClick && onSidebarClick(item.text)}
              >
                <span style={{ color: '#5B5B7B', fontSize: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.icon}</span>
              </div>
              {popoverText === item.text && anchorEl && menuItems && (
                <div
                  style={{
                    position: 'absolute',
                    left: 80,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: '#fff',
                    boxShadow: '0 4px 24px rgba(80, 80, 120, 0.12)',
                    borderRadius: 16,
                    padding: '12px 24px',
                    minWidth: 120,
                    display: 'flex',
                    alignItems: 'center',
                    zIndex: 1300,
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: 18,
                    color: '#2B2B4B',
                  }}
                  onClick={() => onSidebarClick && onSidebarClick(item.text)}
                >
                  {item.text}
                </div>
              )}
              {popoverText === item.text && anchorEl && !menuItems && (
                <div
                  style={{
                    position: 'absolute',
                    left: 72,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: '#fff',
                    boxShadow: '0 4px 24px rgba(80, 80, 120, 0.12)',
                    borderRadius: 16,
                    padding: '12px 24px',
                    minWidth: 120,
                    display: 'flex',
                    alignItems: 'center',
                    zIndex: 1300,
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: 18,
                    color: '#2B2B4B',
                  }}
                  onClick={() => onSidebarClick && onSidebarClick(item.text)}
                >
                  {item.text}
                </div>
              )}
            </div>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ width: '100%', mb: 1 }} />
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <IconButton
          color="error"
          sx={{ mb: 1, width: 72, height: 80, fontSize: 32 }}
          onClick={() => onSidebarClick && onSidebarClick('Cerrar sesión')}
        >
          <PowerSettingsNewIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default NavDesktop; 