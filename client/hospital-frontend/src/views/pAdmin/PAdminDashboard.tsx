import React, { useState } from 'react';
import DashboardLayout from '@components/layout/LayoutSection';
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ListAltIcon from '@mui/icons-material/ListAlt';
import EditNoteIcon from '@mui/icons-material/EditNote';

const pAdminMenu = [
  { text: 'Consultar médicos', icon: <PeopleIcon /> },
  { text: 'Consultar agenda médicos', icon: <CalendarMonthIcon /> },
  { text: 'Gestionar citas pacientes (cancelar, reagendar, cambiar de médico)', icon: <EventAvailableIcon /> },
  { text: 'Asignar citas de pacientes a médicos', icon: <AssignmentIndIcon /> },
  { text: 'Consultar agenda pacientes', icon: <CalendarMonthIcon /> },
  { text: 'Agregar pacientes', icon: <GroupAddIcon /> },
  { text: 'Consultar pacientes', icon: <ListAltIcon /> },
  { text: 'Modificar datos pacientes', icon: <EditNoteIcon /> },
];

const PAdminDashboard = () => {
  const padmin = {
    nombre: "Admin Principal",
    avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg"
  };
  const [mensaje, setMensaje] = useState('Home');

  return (
    <div className="padmin-dashboard-bg">
      <DashboardLayout navProps={{ ...padmin, menuItems: pAdminMenu, onSidebarClick: (text: string) => setMensaje(`Se clickeó el botón ${text}`) }}>
        <div className="dashboard-center-message">
          <h1>{mensaje}</h1>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default PAdminDashboard; 