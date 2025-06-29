import React, { useState } from 'react';
import DashboardLayout from '@components/dashboard/layout/DashboardLayout';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DescriptionIcon from '@mui/icons-material/Description';

const medicMenu = [
  { text: 'Consultar agenda', icon: <CalendarMonthIcon /> },
  { text: 'Consultar medicamentos', icon: <LocalPharmacyIcon /> },
  { text: 'Solicitar equipos', icon: <MedicalServicesIcon /> },
  { text: 'Consultar HC', icon: <AssignmentIcon /> },
  { text: 'Recetar medicamentos', icon: <EditNoteIcon /> },
  { text: 'Descripción cita', icon: <DescriptionIcon /> },
];

const MedicDashboard = () => {
  const medico = {
    nombre: "Dr. Juan Pérez",
    avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg"
  };
  const [mensaje, setMensaje] = useState('Home');

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #E6F7FF 0%, #D4FFEA 100%)' }}>
      <DashboardLayout navProps={{ ...medico, menuItems: medicMenu, onSidebarClick: (text: string) => setMensaje(`Se clickeó el botón ${text}`) }}>
        <div style={{ minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 500 }}>
          {mensaje}
        </div>
      </DashboardLayout>
    </div>
  );
};

export default MedicDashboard; 