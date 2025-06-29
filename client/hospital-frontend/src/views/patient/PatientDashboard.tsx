import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardLayout from '@components/dashboard/layout/DashboardLayout';

const PatientDashboard = () => {
  const paciente = {
    nombre: "Pancho Perez",
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg"
  };
  const [mensaje, setMensaje] = useState('Home');

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #CAE6FF 0%, #D4CDFF 100%)' }}>
      <DashboardLayout navProps={{ ...paciente, onSidebarClick: (text: string) => setMensaje(`Se clickeó el botón ${text}`) }}>
        <div style={{ minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 500 }}>
          {mensaje}
        </div>
      </DashboardLayout>
    </div>
  );
};

export default PatientDashboard; 