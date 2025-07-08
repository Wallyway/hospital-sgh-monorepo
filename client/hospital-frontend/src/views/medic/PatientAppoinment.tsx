import { useState } from "react";
import { useNavigate } from "react-router-dom";
// styles
import "./styles/patientAppoinment.scss";

const CitaPaciente = () => {
  const navigate = useNavigate();

  // Datos simulados del paciente (en una aplicación real, esto vendría de los parámetros de la URL o API)
  const pacienteData = {
    id: "12345",
    nombre: "María González",
    edad: 35,
    telefono: "+34 612 345 678",
    email: "maria.gonzalez@email.com",
    fechaNacimiento: "15/03/1989",
    genero: "Femenino",
    direccion: "Calle Mayor 123, Madrid",
    numeroSeguroSocial: "123456789012",
    alergias: ["Penicilina", "Frutos secos"],
    medicamentosActuales: ["Ibuprofeno 400mg", "Omeprazol 20mg"],
  };

  const citaData = {
    fecha: new Date().toLocaleDateString("es-ES"),
    hora: "09:00",
    tipo: "Consulta General",
    motivo: "Control rutinario",
  };

  const [datosCita, setDatosCita] = useState({
    diagnostico: "",
    observaciones: "",
  });

  const [medicamentos, setMedicamentos] = useState([
    {
      id: 1,
      nombre: "",
      farmaciaDisponible: "",
      posologia: "",
      particular: false,
    },
  ]);

  // Lista de diagnósticos comunes (en una app real vendría de una API)
  const diagnosticosDisponibles = [
    "Hipertensión Arterial",
    "Diabetes Mellitus Tipo 2",
    "Gripe Común",
    "Bronquitis Aguda",
    "Gastritis",
    "Cefalea Tensional",
    "Ansiedad",
    "Lumbalgia",
    "Faringitis",
    "Dermatitis",
    "Control de Rutina",
    "Otro",
  ];

  // Lista de medicamentos comunes (en una app real vendría de una API)
  const medicamentosDisponibles = [
    "Paracetamol 500mg",
    "Ibuprofeno 400mg",
    "Amoxicilina 500mg",
    "Omeprazol 20mg",
    "Losartán 50mg",
    "Metformina 850mg",
    "Atenolol 50mg",
    "Aspirina 100mg",
    "Loratadina 10mg",
    "Diclofenaco 50mg",
  ];

  // Lista de farmacias (en una app real vendría de una API)
  const farmaciasDisponibles = [
    "Farmacia Central",
    "Farmacia San José",
    "Farmacia del Hospital",
    "Farmacia 24 Horas",
    "Farmacia Municipal",
  ];

  const handleInputChange = (field: string, value: string) => {
    setDatosCita((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleMedicamentoChange = (
    id: number,
    field: string,
    value: string | boolean
  ) => {
    setMedicamentos((prev) =>
      prev.map((med) => (med.id === id ? { ...med, [field]: value } : med))
    );
  };

  const agregarMedicamento = () => {
    const nuevoId = Math.max(...medicamentos.map((m) => m.id)) + 1;
    setMedicamentos((prev) => [
      ...prev,
      {
        id: nuevoId,
        nombre: "",
        farmaciaDisponible: "",
        posologia: "",
        particular: false,
      },
    ]);
  };

  const eliminarMedicamento = (id: number) => {
    if (medicamentos.length > 1) {
      setMedicamentos((prev) => prev.filter((med) => med.id !== id));
    }
  };

  const handleGuardarCita = () => {
    // Aquí se guardarían los datos de la cita
    const datosCompletos = {
      paciente: pacienteData,
      cita: citaData,
      datosCita: datosCita,
      medicamentos: medicamentos.filter((med) => med.nombre !== ""), // Solo medicamentos con nombre
    };
    console.log("Datos de la cita guardados:", datosCompletos);
    alert("Cita guardada exitosamente");
  };

  const handleActualizarHC = () => {
    // Redirigir a la vista de Historia Clínica
    navigate(`/medic/historia-clinica/${pacienteData.id}`);
  };

  const handleFinalizarCita = () => {
    handleGuardarCita();
    navigate("/medic/agenda");
  };

  return (
      <div className="main-content-section cita-container">
        {/* Header de la cita */}
        <div className="cita-header">
          <div className="cita-info">
            <h2>Consulta Médica</h2>
            <div className="cita-details">
              <span>
                {citaData.fecha} • {citaData.hora}
              </span>
              <span className="separator">•</span>
              <span>{citaData.tipo}</span>
            </div>
          </div>
          <button
            className="btn-back"
            onClick={() => navigate("/medic/agenda")}
          >
            ← Volver a Agenda
          </button>
        </div>

        <div className="cita-content">
          {/* Datos del Paciente */}
          <div className="patient-section">
            <h3>Información del Paciente</h3>
            <div className="patient-card">
              <div className="patient-main-info">
                <div className="patient-avatar">
                  <span>
                    {pacienteData.nombre
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="patient-details">
                  <h4>{pacienteData.nombre}</h4>
                  <p>
                    ID: {pacienteData.id} • {pacienteData.edad} años •{" "}
                    {pacienteData.genero}
                  </p>
                  <p>📞 {pacienteData.telefono}</p>
                  <p>✉️ {pacienteData.email}</p>
                </div>
              </div>

              <div className="patient-additional-info">
                <div className="info-grid">
                  <div className="info-item">
                    <label>Fecha de Nacimiento:</label>
                    <span>{pacienteData.fechaNacimiento}</span>
                  </div>
                  <div className="info-item">
                    <label>Dirección:</label>
                    <span>{pacienteData.direccion}</span>
                  </div>
                  {/* <div className="info-item full-width">
                    <label>Medicamentos Actuales:</label>
                    <span>{pacienteData.medicamentosActuales.join(", ")}</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de la Cita */}
          <div className="consultation-section">
            <h3>Datos de la Consulta</h3>

            <div className="form-grid">
              {/* Diagnóstico */}
              <div className="form-group full-width">
                <label>Diagnóstico</label>
                <select
                  value={datosCita.diagnostico}
                  onChange={(e) =>
                    handleInputChange("diagnostico", e.target.value)
                  }
                  className="form-select"
                >
                  <option value="">Seleccionar diagnóstico...</option>
                  {diagnosticosDisponibles.map((diagnostico) => (
                    <option key={diagnostico} value={diagnostico}>
                      {diagnostico}
                    </option>
                  ))}
                </select>
              </div>

              {/* Observaciones */}
              <div className="form-group full-width">
                <label>Observaciones</label>
                <textarea
                  value={datosCita.observaciones}
                  onChange={(e) =>
                    handleInputChange("observaciones", e.target.value)
                  }
                  placeholder="Observaciones adicionales durante la consulta..."
                  rows={4}
                />
              </div>

              {/* Sección de Medicamentos */}
              <div className="medicamentos-section">
                <div className="medicamentos-header">
                  <h4>Medicamentos Recetados</h4>
                  <button
                    type="button"
                    className="btn-add-medicamento"
                    onClick={agregarMedicamento}
                  >
                    + Agregar Medicamento
                  </button>
                </div>

                <div className="medicamentos-list">
                  {medicamentos.map((medicamento) => (
                    <div key={medicamento.id} className="medicamento-item">
                      <div className="medicamento-grid">
                        <div className="form-group">
                          <label>Medicamento</label>
                          <select
                            value={medicamento.nombre}
                            onChange={(e) =>
                              handleMedicamentoChange(
                                medicamento.id,
                                "nombre",
                                e.target.value
                              )
                            }
                            className="form-select"
                          >
                            <option value="">Seleccionar medicamento...</option>
                            {medicamentosDisponibles.map((med) => (
                              <option key={med} value={med}>
                                {med}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="form-group">
                          <label>Farmacia Disponible</label>
                          <select
                            value={medicamento.farmaciaDisponible}
                            onChange={(e) =>
                              handleMedicamentoChange(
                                medicamento.id,
                                "farmaciaDisponible",
                                e.target.value
                              )
                            }
                            className="form-select"
                          >
                            <option value="">Seleccionar farmacia...</option>
                            {farmaciasDisponibles.map((farmacia) => (
                              <option key={farmacia} value={farmacia}>
                                {farmacia}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="form-group">
                          <label>Posología</label>
                          <input
                            type="text"
                            value={medicamento.posologia}
                            onChange={(e) =>
                              handleMedicamentoChange(
                                medicamento.id,
                                "posologia",
                                e.target.value
                              )
                            }
                            placeholder="ej: 1 comprimido cada 8 horas"
                          />
                        </div>

                        <div className="form-group checkbox-group">
                          <label className="checkbox-label">
                            <input
                              type="checkbox"
                              checked={medicamento.particular}
                              onChange={(e) =>
                                handleMedicamentoChange(
                                  medicamento.id,
                                  "particular",
                                  e.target.checked
                                )
                              }
                            />
                            <span className="checkbox-text">Particular</span>
                          </label>
                        </div>

                        {medicamentos.length > 1 && (
                          <div className="form-group">
                            <button
                              type="button"
                              className="btn-remove-medicamento"
                              onClick={() =>
                                eliminarMedicamento(medicamento.id)
                              }
                            >
                              🗑️ Eliminar
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="cita-actions">
          <button className="btn-action primary" onClick={handleActualizarHC}>
            📋 Actualizar Historia Clínica
          </button>
          <button className="btn-action success" onClick={handleFinalizarCita}>
            ✅ Finalizar Consulta
          </button>
        </div>
      </div>
  );
};

export default CitaPaciente;
