import React, { useState, useEffect } from "react";
import "./styles/citasPendientes.scss";
// contexts
import { useAuth } from "@contexts/AuthContext";
// queries
import { useGetPatientAppointments, useCancelAppointment } from "@/db/queries/patient";

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

interface ApiAppointment {
  idCita: number;
  idPaciente: number;
  idMedico: number;
  fechaYHora: string;
  estado: "R" | "C" | "P" | "A";
  resumen: string;
  medico: {
    idMedico: number;
  };
}

// Función para mapear el estado de la API al tipo local
const mapApiStatusToLocal = (apiStatus: "R" | "C" | "P" | "A"): AppointmentStatus => {
  const statusMap = {
    "R": "reservada",
    "C": "cancelada", 
    "P": "perdida",
    "A": "asistida"
  } as const;
  return statusMap[apiStatus];
};

// Función para convertir datos de API a formato local
const mapApiAppointmentToLocal = (apiAppointment: ApiAppointment): Appointment => {
  const dateTime = new Date(apiAppointment.fechaYHora);
  
  return {
    id: `CIT-${apiAppointment.idCita}`,
    date: dateTime.toISOString().split('T')[0],
    time: dateTime.toLocaleTimeString('es-ES', { 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: false 
    }),
    description: apiAppointment.resumen || "Consulta General",
    departamento: "Cardiología",
    status: mapApiStatusToLocal(apiAppointment.estado)
  };
};

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
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const { fetchData, loading, error } = useGetPatientAppointments();
  const { post: cancelAppointment, postLoading: cancelLoading, postError: cancelError } = useCancelAppointment();
  const { isAuthenticated } = useAuth();

  const loadAppointments = async () => {
    try {
      if (!isAuthenticated) return;
      const apiAppointments = await fetchData();
      if (apiAppointments && Array.isArray(apiAppointments)) {
        const mappedAppointments = apiAppointments.map(mapApiAppointmentToLocal);
        setAppointments(mappedAppointments);
      } else if (apiAppointments && !apiAppointments.fetchError) {
        // Si no es array pero tampoco es error, puede ser un objeto con las citas
        const appointmentsArray = apiAppointments.data || apiAppointments.appointments || [];
        if (Array.isArray(appointmentsArray)) {
          const mappedAppointments = appointmentsArray.map(mapApiAppointmentToLocal);
          setAppointments(mappedAppointments);
        }
      }
    } catch (err) {
      console.error("Error loading appointments:", err);
    }
  };

  useEffect(() => {
    loadAppointments();
  }, [fetchData, isAuthenticated]);

  const handleCancel = async (id: string) => {
    // Confirmación antes de cancelar
    if (!window.confirm("¿Estás seguro de que deseas cancelar esta cita?")) {
      return;
    }

    try {
      // Extraer el ID numérico del formato "CIT-123"
      const numericId = id.replace('CIT-', '');
      
      // Llamar a la API para cancelar la cita
      await cancelAppointment(numericId);
      
      // Recargar las citas para obtener el estado actualizado
      await loadAppointments();
      
      // Opcional: Mostrar mensaje de éxito
      console.log("Cita cancelada exitosamente");
    } catch (err) {
      console.error("Error canceling appointment:", err);
    }
  };

  if (loading) {
    return (
      <div className="citas-pendientes-section main-content-section">
        <div className="agenda-header">
          <h2>Citas del Usuario</h2>
        </div>
        <div className="loading-message">Cargando citas...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="citas-pendientes-section main-content-section">
        <div className="agenda-header">
          <h2>Citas del Usuario</h2>
        </div>
        <div className="error-message">Error al cargar las citas: {error}</div>
      </div>
    );
  }

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
        {cancelError && (
          <div className="error-message" style={{ marginBottom: "1rem" }}>
            Error al cancelar la cita: {cancelError}
          </div>
        )}
        {appointments.length === 0 ? (
          <div className="no-appointments-message">
            <p>No tienes citas programadas en este momento.</p>
          </div>
        ) : (
          appointments.map((appointment) => (
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
                      disabled={cancelLoading}
                    >
                      {cancelLoading ? "Cancelando..." : "Cancelar"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CitasPendientes;
  
  