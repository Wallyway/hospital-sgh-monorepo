import { Calendar24 } from "@components/ui/Calendar24";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// contexts
import { useAuth } from "@contexts/AuthContext";
// queries
import { useGetPatientAppointments } from "@db/queries/medic";

import "./styles/agenda.scss"; // Import styles for the agenda

interface Appointment {
  id: number;
  time: string;
  duration: string;
  patientName: string;
  patientId: string;
  appointmentType: string;
  status: "completed" | "confirmed" | "pending" | "cancelled";
  statusText: string;
}

const MedicAgenda = () => {
  const { isAuthenticated } = useAuth();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const navigate = useNavigate();
  const { fetchData: getAppointments, loading } = useGetPatientAppointments();

  useEffect(() => {
    const fetchAppointments = async () => {
      if(!isAuthenticated) return;

      const data = await getAppointments();
      console.log("Fetched appointments:", data);
      if (data) {
        const transformedAppointments = data.map((appointment: any) => {
          const statusMap = {
            R: { status: "confirmed", text: "Reservada" },
            C: { status: "cancelled", text: "Cancelada" },
            P: { status: "pending", text: "Perdida" },
            A: { status: "completed", text: "Asistida" },
          };
          const { status, text } = statusMap[appointment.estado as keyof typeof statusMap] || { status: "pending", text: "Pendiente" };

          return {
            id: appointment.idCita,
            time: new Date(appointment.fechaYHora).toLocaleTimeString("es-ES", {
              hour: "2-digit",
              minute: "2-digit",
            }),
            duration: "30 min", // This data is not available in the response
            patientName: `Paciente: #${appointment.idPaciente}`,
            patientId: appointment.idPaciente.toString(),
            appointmentType: appointment.resumen || "Consulta General",
            status: status,
            statusText: text,
          };
        });
        setAppointments(transformedAppointments);
      }
    };

    fetchAppointments();
  }, [selectedDate, getAppointments, isAuthenticated]);

  return (
    <div className="main-content-section agenda-section-container">
      <div className="agenda-header">
        <div>
          <h2>Agenda del Día</h2>
          <div className="agenda-date">
            {selectedDate.toLocaleDateString("es-ES", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>
        <Calendar24 
          date={selectedDate} 
          onDateChange={(date) => {
            if (date) {
              setSelectedDate(date);
            }
          }} 
          showTime={false}
        />
      </div>

      <div className="appointments-container">
        {loading ? (
          <p>Cargando citas...</p>
        ) : (
          appointments.map((appointment) => (
            <div
              key={appointment.id}
              className={`appointment-card ${
                appointment.status === "completed" ? "completed" : ""
              }`}
            >
              <div className="appointment-time">
                <span className="time">{appointment.time}</span>
                <span className="duration">{appointment.duration}</span>
              </div>
              <div className="appointment-details">
                <h4>{appointment.patientName}</h4>
                <p className="patient-info">
                  ID Paciente: {appointment.patientId}
                </p>
                <p className="appointment-type">{appointment.appointmentType}</p>
              </div>
              <div className="appointment-status">
                <span className={`status ${appointment.status}`}>
                  {appointment.statusText}
                </span>
              </div>
              <div className="appointment-actions">
                <button
                  className="btn-action primary"
                  onClick={() =>
                    navigate(
                      `/medic/ver-hc?patientId=${appointment.patientId}`
                    )
                  }
                >
                  {appointment.status === "completed" ? "Ver Notas" : "Ver HC"}
                </button>
                {appointment.status !== "completed" && (
                  <button
                    className="btn-action secondary"
                    onClick={() =>
                      navigate(
                        `/medic/cita_paciente?patientId=${appointment.patientId}&appointmentId=${appointment.id}`
                      )
                    }
                  >
                    Iniciar
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MedicAgenda;
