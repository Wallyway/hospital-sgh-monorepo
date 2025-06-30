import React, { useState } from "react";
import DashboardLayout from "@components/dashboard/layout/DashboardLayout";
import { Calendar24 } from "@components/ui/Calendar24";
import "./patient-dashboard.scss";

const PatientDashboard = () => {
  const [selectedSection, setSelectedSection] = useState("Agenda cita");

  const paciente = {
    nombre: "Pancho Perez",
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    onSidebarClick: setSelectedSection,
  };

  return (
    <div className="patient-dashboard-bg">
      <DashboardLayout navProps={paciente}>
        {selectedSection === "Agenda cita" && (
          <div className="dashboard-center-message">
            <h1 className="dashboard-title">Agenda cita</h1>
            <div className="dashboard-subtitle">Selecciona los detalles de tu cita</div>
            <form className="dashboard-form">
              <div className="dashboard-form-row">
                <div className="dashboard-form-group">
                  <label className="dashboard-label">Selecciona Especialidad</label>
                  <select className="dashboard-select">
                    <option value="">Selecciona una especialidad</option>
                    <option value="medicina">Medicina General</option>
                    <option value="pediatria">Pediatría</option>
                    <option value="dermatologia">Dermatología</option>
                  </select>
                </div>
                <div className="dashboard-form-group">
                  <label className="dashboard-label">Selecciona Médico</label>
                  <select className="dashboard-select">
                    <option value="">Selecciona un médico</option>
                    <option value="juan">Dr. Juan Pérez</option>
                    <option value="ana">Dra. Ana Gómez</option>
                  </select>
                </div>
              </div>
              <div className="dashboard-calendar-group">
                <label className="dashboard-label">Disponibilidad</label>
                <Calendar24 />
              </div>
              <div className="dashboard-actions">
                <button type="submit" className="dashboard-btn dashboard-btn-primary">Confirmar Cita</button>
                <button type="button" className="dashboard-btn dashboard-btn-secondary">Cancelar</button>
              </div>
            </form>
          </div>
        )}
      </DashboardLayout>
    </div>
  );
};

export default PatientDashboard;
