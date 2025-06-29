import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardLayout from "@components/dashboard/layout/DashboardLayout";

const PatientDashboard = () => {
  const paciente = {
    nombre: "Pancho Perez",
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  };
  const [mensaje, setMensaje] = useState("Home");

  return (
    <div className="patient-dashboard-bg">
      <DashboardLayout
        navProps={{
          ...paciente,
          onSidebarClick: (text: string) => setMensaje(`${text}`),
        }}
      >
        <div className="dashboard-center-message">
          <h1>{mensaje}</h1>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default PatientDashboard;
