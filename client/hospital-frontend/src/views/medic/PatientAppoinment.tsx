import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// contexts
import { useAuth } from "@contexts/AuthContext";
// styles
import "./styles/patientAppoinment.scss";
// queries
import { usePrescribeMedicines, useGetMedicines, useAddAppointmentSummary } from "@db/queries/medic";

const CitaPaciente = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extraer parámetros de la URL
  const queryParams = new URLSearchParams(location.search);
  const patientId = queryParams.get('patientId') || "12345";
  const appointmentId = queryParams.get('appointmentId') || "0";
  const appointmentDate = queryParams.get('date') || new Date().toLocaleDateString("es-ES");
  const appointmentTime = queryParams.get('time') || "06:00";
  const appointmentType = queryParams.get('type') || "Consulta General";

  // Datos del paciente (usando los parámetros recibidos)
  const pacienteData = {
    id: patientId,
    nombre: `Paciente: #${patientId}`,
    edad: 25,
    telefono: "3170835965",
    email: `patient.${patientId}@mail.com`,
    fechaNacimiento: "01/01/2000",
    genero: "Masculino",
    direccion: "Calle 100",
    numeroSeguroSocial: "123456789012",
    alergias: ["Penicilina", "Frutos secos"],
    medicamentosActuales: ["Ibuprofeno 400mg", "Omeprazol 20mg"],
  };

  const citaData = {
    id: appointmentId,
    fecha: appointmentDate,
    hora: appointmentTime,
    tipo: appointmentType,
    motivo: "Control rutinario",
  };

  const [datosCita, setDatosCita] = useState({
    diagnostico: "",
    observaciones: "",
  });

  const [medicamentos, setMedicamentos] = useState<{
    id: number;
    idMedicamento: number;
    nombre: string;
    posologia: string;
    esParticular: boolean;
  }[]>([
    {
      id: 1,
      idMedicamento: 0, // Se actualizará cuando se carguen los medicamentos
      nombre: "", // Solo para la interfaz
      posologia: "",
      esParticular: false,
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

  // Interfaz para medicamentos
  interface Medicamento {
    idMedicamento: number;
    nombre: string;
    descripcion: string;
  }
  
  // Estado para medicamentos disponibles desde la API
  const [medicamentosDisponibles, setMedicamentosDisponibles] = useState<Medicamento[]>([]);
  
  // Obtener lista de medicamentos desde la API
  const { fetchData: getMedicamentos, loading: loadingMedicamentos } = useGetMedicines();
  
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    // Cargar medicamentos cuando se monta el componente
    const cargarMedicamentos = async () => {
      try {
        if (!isAuthenticated) return;
        const data = await getMedicamentos();
        if (data && Array.isArray(data)) {
          setMedicamentosDisponibles(data);
          console.log("Medicamentos cargados:", data);
          
          // Actualizar el medicamento inicial si hay medicamentos disponibles
          if (data.length > 0 && medicamentos.length > 0) {
            setMedicamentos(prev => 
              prev.map((med, index) => 
                index === 0 ? {
                  ...med,
                  idMedicamento: data[0].idMedicamento,
                  nombre: data[0].nombre
                } : med
              )
            );
          }
        }
      } catch (error) {
        console.error("Error al cargar medicamentos:", error);
      }
    };
    
    cargarMedicamentos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);



  const handleInputChange = (field: string, value: string) => {
    setDatosCita((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleMedicamentoChange = (
    id: number,
    field: string,
    value: string | boolean | number
  ) => {
    setMedicamentos((prev) =>
      prev.map((med) => {
        if (med.id === id) {
          // Si es cambio de medicamento por ID
          if (field === "idMedicamento") {
            const selectedMed = medicamentosDisponibles.find(m => m.idMedicamento === Number(value));
            if (selectedMed) {
              return { 
                ...med, 
                idMedicamento: selectedMed.idMedicamento,
                nombre: selectedMed.nombre // Actualizamos también el nombre para la UI
              };
            }
          }
          // Para el campo esParticular
          if (field === "esParticular") {
            return { ...med, esParticular: value as boolean };
          }
          // Para otros campos (posología)
          return { ...med, [field]: value as string };
        }
        return med;
      })
    );
  };

  const agregarMedicamento = () => {
    const nuevoId = Math.max(...medicamentos.map((m) => m.id)) + 1;
    setMedicamentos((prev) => [
      ...prev,
      {
        id: nuevoId,
        idMedicamento: 0, // Valor inicial, se actualizará cuando seleccionen un medicamento
        nombre: "",
        posologia: "",
        esParticular: false,
      },
    ]);
  };

  const eliminarMedicamento = (id: number) => {
    if (medicamentos.length > 1) {
      setMedicamentos((prev) => prev.filter((med) => med.id !== id));
    }
  };

  // Usar los hooks para API
  const { post: prescribirMedicamentos } = usePrescribeMedicines();
  const { post: agregarResumen } = useAddAppointmentSummary();
  
  // Estado para controlar el guardado
  const [guardando, setGuardando] = useState(false);

  const handleGuardarCita = async () => {
    // Verificar si los campos obligatorios están vacíos
    if (datosCita.observaciones.trim() === "") {
      alert("Por favor, ingrese un resumen de la cita.");
      return;
    }
    
    // Verificar si se seleccionó un diagnóstico
    if (datosCita.diagnostico === "") {
      alert("Por favor, seleccione un diagnóstico para la consulta.");
      return;
    }
    
    // Filtrar solo los medicamentos con ID válido y posología
    const medicamentosValidos = medicamentos.filter(
      (med) => med.idMedicamento > 0 && med.posologia.trim() !== ""
    );
    
    // Verificar si hay medicamentos sin posología
    const medicamentosSinPosologia = medicamentos.filter(
      (med) => med.idMedicamento > 0 && med.posologia.trim() === ""
    );
    
    if (medicamentosSinPosologia.length > 0) {
      alert("Hay medicamentos seleccionados sin posología. Por favor complete todos los campos.");
      return;
    }
    
    // Formatear datos para la API
    const prescripcionesData = {
      prescripciones: medicamentosValidos.map(med => ({
        idMedicamento: med.idMedicamento,
        posologia: med.posologia,
        esParticular: med.esParticular
      }))
    };
    
    // Preparar datos para el resumen
    const resumenData = {
      resumen: datosCita.observaciones
    };
    
    setGuardando(true);
    let prescripcionesGuardadas = false;
    let resumenGuardado = false;
    
    try {
      // 1. Guardar prescripciones si hay medicamentos
      if (medicamentosValidos.length > 0) {
        console.log("Enviando prescripciones:", prescripcionesData);
        const resultadoPrescripciones = await prescribirMedicamentos({
          ...prescripcionesData,
          endpoint: `appointments/${appointmentId}/prescriptions`
        });

        // const resultadoPrescripciones = {errorMutationMsg: true, errorJsonMsg: "a"}
        
        if (resultadoPrescripciones.errorMutationMsg) {
          console.error("Error al guardar prescripciones:", resultadoPrescripciones);
          alert("Error al guardar los medicamentos: " + resultadoPrescripciones.errorJsonMsg);
        } else {
          console.log("Prescripciones guardadas:", resultadoPrescripciones);
          prescripcionesGuardadas = true;
        }
      } else {
        console.log("No hay medicamentos para prescribir");
        prescripcionesGuardadas = true; // Consideramos éxito si no hay medicamentos
      }
      
      // 2. Guardar resumen de la cita
      console.log("Enviando resumen:", resumenData);
      const resultadoResumen = await agregarResumen(appointmentId, resumenData);
      // const resultadoResumen = {errorMutationMsg: true, errorJsonMsg: "a"}
      if (resultadoResumen.errorMutationMsg) {
        console.error("Error al guardar el resumen:", resultadoResumen);
        alert("Error al guardar el resumen de la cita: " + resultadoResumen.errorJsonMsg);
      } else {
        console.log("Resumen guardado:", resultadoResumen);
        resumenGuardado = true;
      }
      
      // Mostrar mensaje según los resultados
      if (prescripcionesGuardadas && resumenGuardado) {
        alert("Cita guardada exitosamente");
      } else if (prescripcionesGuardadas) {
        alert("Medicamentos guardados exitosamente, pero hubo un problema al guardar el resumen");
      } else if (resumenGuardado) {
        alert("Resumen guardado exitosamente, pero hubo un problema al guardar los medicamentos");
      }
    } catch (error) {
      console.error("Error al guardar la cita:", error);
      alert("Error al guardar la cita");
    } finally {
      setGuardando(false);
    }
  };

  const handleActualizarHC = () => {
    // Redirigir a la vista de Historia Clínica
    navigate(`/medic/ver-hc?patientId=${pacienteData.id}`);
  };

  const handleFinalizarCita = async () => {
    await handleGuardarCita();
    // navigate("/medic/agenda");
  };

  return (
      <div className="main-content-section cita-container">
        {/* Header de la cita */}          <div className="cita-header">
          <div className="cita-info">
            <h2>Consulta Médica #{citaData.id}</h2>
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
                <label>Diagnóstico <span className="required-field">*</span></label>
                <select
                  value={datosCita.diagnostico}
                  onChange={(e) =>
                    handleInputChange("diagnostico", e.target.value)
                  }
                  className="form-select"
                  required
                >
                  <option value="">Seleccionar diagnóstico...</option>
                  {diagnosticosDisponibles.map((diagnostico) => (
                    <option key={diagnostico} value={diagnostico}>
                      {diagnostico}
                    </option>
                  ))}
                </select>
              </div>

              {/* Observaciones / Resumen */}
              <div className="form-group full-width">
                <label>Resumen de la Consulta <span className="required-field">*</span></label>
                <textarea
                  value={datosCita.observaciones}
                  onChange={(e) =>
                    handleInputChange("observaciones", e.target.value)
                  }
                  placeholder="Ingrese un resumen de la consulta (obligatorio). Este texto se guardará como resumen oficial de la cita."
                  rows={4}
                  required
                />
                <small className="field-hint">Este campo es obligatorio y se guardará como el resumen oficial de la cita.</small>
              </div>

              {/* Sección de Medicamentos */}
              <div className="medicamentos-section">
                <div className="medicamentos-header">
                  <h4>Medicamentos Recetados</h4>
                  {loadingMedicamentos ? (
                    <span className="loading-text">Cargando catálogo de medicamentos...</span>
                  ) : (
                    <button
                      type="button"
                      className="btn-add-medicamento"
                      onClick={agregarMedicamento}
                    >
                      + Agregar Medicamento
                    </button>
                  )}
                </div>

                <div className="medicamentos-list">
                  {medicamentos.map((medicamento) => (
                    <div key={medicamento.id} className="medicamento-item">
                      <div className="medicamento-grid">
                        <div className="form-group">
                          <label>Medicamento</label>
                          <select
                            value={medicamento.idMedicamento || ''}
                            onChange={(e) =>
                              handleMedicamentoChange(
                                medicamento.id,
                                "idMedicamento",
                                e.target.value ? Number(e.target.value) : 0
                              )
                            }
                            className="form-select"
                          >
                            <option value="">Seleccionar medicamento...</option>
                            {medicamentosDisponibles.map((med) => (
                              <option key={med.idMedicamento} value={med.idMedicamento}>
                                {med.nombre} - {med.descripcion}
                              </option>
                            ))}
                          </select>
                          {loadingMedicamentos && <span className="loading-text">Cargando medicamentos...</span>}
                          {/* {medicamento.idMedicamento > 0 && (
                            <small className="medication-info">
                              {medicamentosDisponibles.find(m => m.idMedicamento === medicamento.idMedicamento)?.descripcion}
                            </small>
                          )} */}
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
                              checked={medicamento.esParticular}
                              onChange={(e) =>
                                handleMedicamentoChange(
                                  medicamento.id,
                                  "esParticular",
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
          <button 
            className="btn-action primary" 
            onClick={handleActualizarHC}
            disabled={guardando}
          >
            📋 Actualizar Historia Clínica
          </button>
          <button 
            className="btn-action success" 
            onClick={handleFinalizarCita}
            disabled={guardando}
          >
            {guardando ? "Guardando..." : "✅ Finalizar Consulta"}
          </button>
        </div>
      </div>
  );
};

export default CitaPaciente;
