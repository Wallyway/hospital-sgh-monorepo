import React, { useState } from "react";

// Definir los tipos de estado posibles
type AppointmentStatus = "asistida" | "cancelada" | "perdida" | "reservada";

interface Appointment {
  id: string;
  date: string;
  time: string;
  description: string;
  departamento: string;
  status: AppointmentStatus;
}

const statusLabels: Record<AppointmentStatus, string> = {
  asistida: "ASISTIDA",
  cancelada: "CANCELADA",
  perdida: "PERDIDA",
  reservada: "RESERVADA",
};

const statusClass: Record<AppointmentStatus, string> = {
  asistida: "asistida-status",
  cancelada: "cancelada-status",
  perdida: "perdida-status",
  reservada: "reservada-status",
};

const initialAppointments: Appointment[] = [
  {
    id: "CIT-1001",
    date: "2024-06-21",
    time: "08:00",
    description: "Consulta General",
    departamento: "Cardiología",
    status: "asistida",
  },
  {
    id: "CIT-1002",
    date: "2024-06-22",
    time: "09:30",
    description: "Control de Presión",
    departamento: "Medicina Interna",
    status: "reservada",
  },
  {
    id: "CIT-1003",
    date: "2024-06-23",
    time: "11:00",
    description: "Chequeo Anual",
    departamento: "Oncología",
    status: "cancelada",
  },
  {
    id: "CIT-1004",
    date: "2024-06-24",
    time: "15:00",
    description: "Consulta Nutrición",
    departamento: "Nutrición",
    status: "perdida",
  },
  {
    id: "CIT-1005",
    date: "2024-06-25",
    time: "10:00",
    description: "Control Diabetes",
    departamento: "Endocrinología",
    status: "reservada",
  },
];

const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="4" fill="#fff"/><rect x="3" y="4" width="18" height="18" rx="4" stroke="#2563eb" strokeWidth="2"/><line x1="16" y1="2" x2="16" y2="6" stroke="#2563eb" strokeWidth="2"/><line x1="8" y1="2" x2="8" y2="6" stroke="#2563eb" strokeWidth="2"/><line x1="3" y1="10" x2="21" y2="10" stroke="#2563eb" strokeWidth="2"/></svg>
);
const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" fill="#fff"/><circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2"/><polyline points="12 6 12 12 16 14" stroke="#2563eb" strokeWidth="2"/></svg>
);
const DescIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" fill="#fff"/><rect x="4" y="4" width="16" height="16" rx="2" stroke="#2563eb" strokeWidth="2"/><line x1="8" y1="8" x2="16" y2="8" stroke="#2563eb" strokeWidth="2"/><line x1="8" y1="12" x2="16" y2="12" stroke="#2563eb" strokeWidth="2"/><line x1="8" y1="16" x2="12" y2="16" stroke="#2563eb" strokeWidth="2"/></svg>
);
const DeptIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="13" rx="2" fill="#fff"/><rect x="2" y="7" width="20" height="13" rx="2" stroke="#2563eb" strokeWidth="2"/><path d="M16 7V5a4 4 0 0 0-8 0v2" stroke="#2563eb" strokeWidth="2"/></svg>
);

const CitasPendientes = () => {
  const [appointments, setAppointments] = useState<Appointment[]>(initialAppointments);

  const handleCancel = (id: string) => {
    setAppointments((prev) =>
      prev.map((appt) =>
        appt.id === id && appt.status === "reservada"
          ? { ...appt, status: "cancelada" }
          : appt
      )
    );
  };

  return (
    <div className="citas-pendientes-section main-content-section">
      <div className="agenda-header">
        <h2>Citas del Usuario</h2>
        <div className="agenda-date">
          {new Date().toLocaleDateString("es-ES", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>

      <div className="appointments-container">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className={`appointment-card appointment-card-compact ${statusClass[appointment.status]}`}
          >
            <div className="appointment-card-row-flex">
              <div className="appointment-card-row-flex-status">
                <span className="info-id"><strong>{appointment.id}</strong></span>
                <span className={`status ${statusClass[appointment.status]}`}>{statusLabels[appointment.status]}</span>
              </div>
              <div className="appointment-info-block-horizontal">
                <span className="info-icon-block"><CalendarIcon /> <span className="info-label">Fecha:</span> <span className="info-value">{appointment.date}</span></span>
                <span className="info-icon-block"><ClockIcon /> <span className="info-label">Hora:</span> <span className="info-value">{appointment.time}</span></span>
                <span className="info-icon-block"><DeptIcon /> <span className="info-label">Departamento:</span> <span className="info-value">{appointment.departamento}</span></span>
                <span className="info-icon-block"><DescIcon /> <span className="info-label">Descripción:</span> <span className="info-value">{appointment.description}</span></span>
              </div>
            </div>
            {appointment.status === "reservada" && (
              <div className="appointment-actions-bottom-full">
                <div className="appointment-actions-bottom-right">
                  <button
                    className="btn-action btn-cancelar"
                    onClick={() => handleCancel(appointment.id)}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CitasPendientes;
  
  