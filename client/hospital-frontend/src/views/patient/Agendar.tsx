import { useState, useEffect } from "react";
import { Calendar24 } from "@components/ui/Calendar24";
//contexts
import { useAuth } from "@contexts/AuthContext";
// queries
import {
  useGetSpecialties,
  useGetAvailableMedics,
  useCreateAppointment,
} from "@/db/queries/patient";
import "./styles/agendar.scss";

const Agendar = () => {
  const {
    specialties,
    availableMedics,
    loadingSpecialties,
    loadingMedics,
    creatingAppointment,
    errorSpecialties,
    errorMedics,
    createError,
    selectedSpecialty,
    selectedDoctor,
    selectedDate,
    selectedTime,
    handleSpecialtyChange,
    handleDoctorChange,
    handleDateChange,
    handleTimeChange,
    handleSubmit,
  } = useAgendar();

  return (
    <div className="main-content-section agendar-cita-section">
      <div className="agenda-subtitle">
        <h2>Selecciona los detalles de tu cita</h2>
      </div>
      <form className="agenda-form" onSubmit={handleSubmit}>
        <div className="agenda-form-row">
          <div className="agenda-form-group">
            <label className="agenda-label">Selecciona Especialidad</label>
            <select
              className="agenda-select"
              value={selectedSpecialty}
              onChange={handleSpecialtyChange}
              disabled={loadingSpecialties}
            >
              <option value="">
                {loadingSpecialties
                  ? "Cargando especialidades..."
                  : "Selecciona una especialidad"}
              </option>
              {specialties.map((specialty) => (
                <option
                  key={specialty.idDepartamento}
                  value={specialty.idDepartamento}
                >
                  {specialty.Nombre}
                </option>
              ))}
            </select>
            {errorSpecialties && (
              <div
                className="error-message"
                style={{ color: "red", fontSize: "12px", marginTop: "4px" }}
              >
                {errorSpecialties}
              </div>
            )}
          </div>
        </div>

        <div className="agenda-calendar-group">
          <label className="agenda-label">Disponibilidad</label>
          <Calendar24
            date={selectedDate ? new Date(selectedDate + 'T00:00:00') : undefined}
            onDateChange={(date) => {
              if (date) {
                // Obtener la fecha en formato local sin conversión UTC
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                const dateString = `${year}-${month}-${day}`;
                handleDateChange(dateString);
              } else {
                handleDateChange("");
              }
            }}
            time={selectedTime}
            onTimeChange={handleTimeChange}
            showTime={true}
          />
        </div>

        <div className="agenda-form-row">
          <div className="agenda-form-group">
            <label className="agenda-label">Selecciona Médico</label>
            <select
              className="agenda-select"
              value={selectedDoctor}
              onChange={handleDoctorChange}
              disabled={
                loadingMedics ||
                !selectedSpecialty ||
                !selectedDate ||
                !selectedTime
              }
            >
              <option value="">
                {!selectedSpecialty || !selectedDate || !selectedTime
                  ? "Primero selecciona especialidad, fecha y hora"
                  : loadingMedics
                    ? "Cargando médicos disponibles..."
                    : availableMedics.length === 0
                      ? "No hay médicos disponibles"
                      : "Selecciona un médico"}
              </option>
              {availableMedics.map((medic) => (
                <option key={medic.idMedico} value={medic.idMedico}>
                  Médico ID: {medic.empleado.idUsuario} (ID Médico:{" "}
                  {medic.idMedico})
                </option>
              ))}
            </select>
            {errorMedics && (
              <div
                className="error-message"
                style={{ color: "red", fontSize: "12px", marginTop: "4px" }}
              >
                {errorMedics}
              </div>
            )}
          </div>
        </div>

        <div className="agenda-actions">
          <button
            type="submit"
            className="agenda-btn agenda-btn-primary"
            disabled={
              !selectedSpecialty ||
              !selectedDoctor ||
              !selectedDate ||
              !selectedTime ||
              creatingAppointment
            }
          >
            {creatingAppointment ? "Creando cita..." : "Confirmar Cita"}
          </button>
          <button type="button" className="agenda-btn agenda-btn-secondary">
            Cancelar
          </button>
          {createError && (
            <div
              className="error-message"
              style={{
                color: "red",
                fontSize: "12px",
                marginTop: "8px",
                textAlign: "center",
                width: "100%",
              }}
            >
              {createError}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Agendar;

// logica para agendar cita
const useAgendar = () => {
  const { isAuthenticated } = useAuth();
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [specialties, setSpecialties] = useState<any[]>([]);
  const [availableMedics, setAvailableMedics] = useState<any[]>([]);

  const {
    fetchData,
    loading: loadingSpecialties,
    error: errorSpecialties,
  } = useGetSpecialties();
  const {
    fetchData: fetchMedics,
    loading: loadingMedics,
    error: errorMedics,
  } = useGetAvailableMedics();
  const { post, postLoading, postError } = useCreateAppointment();

  // Cargar especialidades al montar el componente
  useEffect(() => {
    const loadSpecialties = async () => {
      try {
        if (!isAuthenticated) return;
        const data = await fetchData();
        setSpecialties(data || []);
      } catch (err) {
        console.error("Error loading specialties:", err);
      }
    };

    loadSpecialties();
  }, [fetchData, isAuthenticated]);

  // Cargar médicos disponibles cuando cambian especialidad, fecha o hora
  useEffect(() => {
    const loadAvailableMedics = async () => {
      if (
        !selectedSpecialty ||
        !selectedDate ||
        !selectedTime ||
        !isAuthenticated
      ) {
        setAvailableMedics([]);
        return;
      }
      console.log(selectedDate, selectedTime);

      try {
        const queryParams = `appointments/available-medics?specialty=${selectedSpecialty}&date=${selectedDate}&time=${selectedTime}`;
        console.log(queryParams);
        const data = await fetchMedics(queryParams);
        console.log(data);
        setAvailableMedics(data || []);
      } catch (err) {
        console.error("Error loading available medics:", err);
        setAvailableMedics([]);
      }
    };

    loadAvailableMedics();
  }, [
    selectedSpecialty,
    selectedDate,
    selectedTime,
    fetchMedics,
    isAuthenticated,
  ]);

  const handleSpecialtyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedSpecialty(event.target.value);
    setSelectedDoctor(""); // Reset doctor selection when specialty changes
  };

  const handleDoctorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDoctor(event.target.value);
  };

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    setSelectedDoctor(""); // Reset doctor selection when date changes
  };

  const handleTimeChange = (time: string) => {
    setSelectedTime(time);
    setSelectedDoctor(""); // Reset doctor selection when time changes
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!selectedDoctor || !selectedDate || !selectedTime) {
      console.error("Faltan datos requeridos para crear la cita");
      return;
    }

    try {
      // Crear fecha manteniendo el día seleccionado - ajuste específico para tu zona horaria
      const [year, month, day] = selectedDate.split('-');
      const [hours, minutes, seconds = '00'] = selectedTime.split(':');
      
      // Convertir hora local a UTC: restar 19 horas para que 21:00 → 02:00 del mismo día
      let adjustedHours = parseInt(hours) - 19;
      
      // Si las horas son negativas, ajustar sumando 24
      if (adjustedHours < 0) {
        adjustedHours = adjustedHours + 24;
      }
      
      // Formatear la fecha y hora manualmente manteniendo el día original
      const dateTimeString = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T${adjustedHours.toString().padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}.000Z`;

      const appointmentData = {
        idMedico: parseInt(selectedDoctor),
        fechaYHora: dateTimeString,
      };

      console.log("Fecha original:", selectedDate, selectedTime);
      console.log("Fecha/hora con -5 horas (UTC):", dateTimeString);
      console.log("Creando cita con datos:", appointmentData);

      const result = await post(appointmentData);

      if (result && !result.errorMutationMsg) {
        alert("Cita creada exitosamente!");

        // Resetear el formulario
        setSelectedSpecialty("");
        setSelectedDoctor("");
        setSelectedDate("");
        setSelectedTime("");
        setAvailableMedics([]);
      }
    } catch (err) {
      console.error("Error al crear la cita:", err);
    }
  };

  return {
    specialties,
    availableMedics,
    loadingSpecialties,
    loadingMedics,
    creatingAppointment: postLoading,
    errorSpecialties,
    errorMedics,
    createError: postError,
    selectedSpecialty,
    selectedDoctor,
    selectedDate,
    selectedTime,
    handleSpecialtyChange,
    handleDoctorChange,
    handleDateChange,
    handleTimeChange,
    handleSubmit,
  };
};
