import { Calendar24 } from "@components/ui/Calendar24";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MedicAgenda = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const navigate = useNavigate();
  // Lista de citas
  const appointments = [
    {
      id: 1,
      time: "08:00",
      duration: "30 min",
      patientName: "Pedro Jiménez",
      patientId: "98765",
      patientAge: 55,
      appointmentType: "Control Rutinario",
      status: "completed",
      statusText: "Completada",
    },
    {
      id: 2,
      time: "09:00",
      duration: "30 min",
      patientName: "María González",
      patientId: "12345",
      patientAge: 35,
      appointmentType: "Consulta General",
      status: "confirmed",
      statusText: "Confirmada",
    },
    {
      id: 3,
      time: "10:30",
      duration: "45 min",
      patientName: "Carlos Mendoza",
      patientId: "67890",
      patientAge: 42,
      appointmentType: "Control Postoperatorio",
      status: "pending",
      statusText: "Pendiente",
    },
    {
      id: 4,
      time: "12:00",
      duration: "30 min",
      patientName: "Luis Martínez",
      patientId: "11111",
      patientAge: 28,
      appointmentType: "Primera Consulta",
      status: "confirmed",
      statusText: "Confirmada",
    },
    {
      id: 5,
      time: "14:00",
      duration: "30 min",
      patientName: "Ana Rodríguez",
      patientId: "54321",
      patientAge: 28,
      appointmentType: "Primera Consulta",
      status: "confirmed",
      statusText: "Confirmada",
    },
    {
      id: 6,
      time: "15:30",
      duration: "45 min",
      patientName: "Roberto Silva",
      patientId: "22222",
      patientAge: 65,
      appointmentType: "Control Diabetes",
      status: "pending",
      statusText: "Pendiente",
    },
    {
      id: 7,
      time: "16:15",
      duration: "30 min",
      patientName: "Carmen López",
      patientId: "33333",
      patientAge: 45,
      appointmentType: "Consulta General",
      status: "confirmed",
      statusText: "Confirmada",
    },
  ];

  return (
    <div className="main-content-section">
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
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className={`appointment-card ${appointment.status === "completed" ? "completed" : ""}`}
          >
            <div className="appointment-time">
              <span className="time">{appointment.time}</span>
              <span className="duration">{appointment.duration}</span>
            </div>
            <div className="appointment-details">
              <h4>{appointment.patientName}</h4>
              <p className="patient-info">
                ID: {appointment.patientId} • Edad: {appointment.patientAge}{" "}
                años
              </p>
              <p className="appointment-type">{appointment.appointmentType}</p>
            </div>
            <div className="appointment-status">
              <span className={`status ${appointment.status}`}>
                {appointment.statusText}
              </span>
            </div>
            <div className="appointment-actions">
              <button className="btn-action primary">
                {appointment.status === "completed" ? "Ver Notas" : "Ver HC"}
              </button>
              {appointment.status !== "completed" && (
                <button 
                  className="btn-action secondary"
                  onClick={() => navigate(`/medic/cita_paciente?patientId=${appointment.patientId}&appointmentId=${appointment.id}`)}
                >
                  Iniciar
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicAgenda;
