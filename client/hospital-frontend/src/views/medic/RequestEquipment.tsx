import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/requestEquipment.scss";

interface EquipmentRequest {
  id: string;
  nombreEquipo: string;
  fechaPrestamo: string;
  fechaDevolucion: string;
  estado: "en_uso" | "devuelto";
  medicoSolicitante: string;
  observaciones?: string;
  fechaSolicitud: string;
}

const SolicitarEquipos = () => {
  const navigate = useNavigate();
  const fechaPrestamo = new Date(); // Fecha actual fija
  const [filtroEstado, setFiltroEstado] = useState<string>("todos");

  const [nuevaSolicitud, setNuevaSolicitud] = useState({
    nombreEquipo: "",
    observaciones: "",
  });

  // Datos mock de solicitudes existentes (ahora como estado para poder modificarlos)
  const [solicitudesExistentes, setSolicitudesExistentes] = useState<
    EquipmentRequest[]
  >([
    {
      id: "EQ-003",
      nombreEquipo: "Silla de Ruedas",
      fechaPrestamo: "2025-06-28",
      fechaDevolucion: "2025-07-02",
      estado: "devuelto",
      medicoSolicitante: "Dr. Juan Pérez",
      observaciones: "Traslado de paciente",
      fechaSolicitud: "2025-06-27",
    },
    {
      id: "EQ-004",
      nombreEquipo: "Oxímetro de Pulso",
      fechaPrestamo: "2025-07-01",
      fechaDevolucion: "2025-07-08",
      estado: "en_uso",
      medicoSolicitante: "Dr. Juan Pérez",
      observaciones: "Monitoreo de saturación",
      fechaSolicitud: "2025-06-30",
    },
  ]);

  // Lista de equipos disponibles
  const equiposDisponibles = [
    "Electrocardiografo",
    "Monitor de Presión Arterial",
    "Oxímetro de Pulso",
    "Nebulizador",
    "Aspirador de Secreciones",
    "Silla de Ruedas",
    "Camilla de Transporte",
    "Desfibrilador",
    "Ventilador Mecánico",
    "Bomba de Infusión",
    "Estetoscopio Electrónico",
    "Termómetro Digital",
    "Tensiómetro Manual",
    "Lámpara de Examen",
    "Mesa de Instrumentos",
  ];

  // Función para marcar equipo como devuelto
  const marcarComoDevuelto = (solicitudId: string) => {
    const fechaActual = new Date().toISOString().split("T")[0];
    setSolicitudesExistentes((prevSolicitudes) =>
      prevSolicitudes.map((solicitud) =>
        solicitud.id === solicitudId
          ? {
              ...solicitud,
              estado: "devuelto" as const,
              fechaDevolucion: fechaActual,
            }
          : solicitud
      )
    );
  };

  // Filtrar solicitudes según el estado seleccionado
  const solicitudesFiltradas =
    filtroEstado === "todos"
      ? solicitudesExistentes
      : solicitudesExistentes.filter(
          (solicitud) => solicitud.estado === filtroEstado
        );

  // Función para obtener la clase CSS según el estado
  const getEstadoClass = (estado: string) => {
    switch (estado) {
      case "en_uso":
        return "estado-en-uso";
      case "devuelto":
        return "estado-devuelto";
      default:
        return "";
    }
  };

  // Función para obtener el texto del estado
  const getEstadoText = (estado: string) => {
    switch (estado) {
      case "en_uso":
        return "EN USO";
      case "devuelto":
        return "DEVUELTO";
      default:
        return estado.toUpperCase();
    }
  };

  // Función para formatear fecha
  const formatearFecha = (fecha: string) => {
    const [año, mes, dia] = fecha.split("-").map(Number);
    const fechaLocal = new Date(año, mes - 1, dia);

    return fechaLocal.toLocaleDateString("es-ES", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Calcular fecha de devolución (7 días después del préstamo)
    const fechaDevolucionCalculada = new Date(
      Date.now() + 7 * 24 * 60 * 60 * 1000
    );

    // Aquí se enviaría la solicitud a la API
    console.log("Nueva solicitud:", {
      nombreEquipo: nuevaSolicitud.nombreEquipo,
      fechaPrestamo: fechaPrestamo.toISOString().split("T")[0],
      fechaDevolucion: fechaDevolucionCalculada.toISOString().split("T")[0],
      observaciones: nuevaSolicitud.observaciones,
    });

    // Resetear formulario
    setNuevaSolicitud({
      nombreEquipo: "",
      observaciones: "",
    });

    alert("Solicitud enviada correctamente");
  };

  return (
    <div className="solicitar-equipos-container">
      <div className="equipos-header">
        <div className="header-title-row">
          <h1>Solicitar Equipos</h1>
          <button
            className="btn-back"
            onClick={() => navigate("/medic/agenda")}
          >
            ← Volver a Agenda
          </button>
        </div>
      </div>

      <div className="equipos-content">
        {/* Formulario de Nueva Solicitud */}
        <div className="nueva-solicitud-section">
          <h2>Nueva Solicitud de Equipo</h2>
          <form onSubmit={handleSubmit} className="solicitud-form">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Equipo Solicitado</label>
                <select
                  className="form-select"
                  value={nuevaSolicitud.nombreEquipo}
                  onChange={(e) =>
                    setNuevaSolicitud({
                      ...nuevaSolicitud,
                      nombreEquipo: e.target.value,
                    })
                  }
                  required
                >
                  <option value="">Selecciona un equipo</option>
                  {equiposDisponibles.map((equipo, index) => (
                    <option key={index} value={equipo}>
                      {equipo}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Fecha de Préstamo</label>
                <div className="fecha-actual">
                  {fechaPrestamo.toLocaleDateString("es-ES", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary">
                Enviar Solicitud
              </button>
            </div>
          </form>
        </div>

        {/* Lista de Solicitudes Existentes */}
        <div className="solicitudes-existentes-section">
          <div className="solicitudes-header">
            <h2>Mis Solicitudes</h2>
            <div className="filtros">
              <label className="filter-label">Filtrar por estado:</label>
              <select
                className="filter-select"
                value={filtroEstado}
                onChange={(e) => setFiltroEstado(e.target.value)}
              >
                <option value="todos">Todos</option>
                <option value="en_uso">En Uso</option>
                <option value="devuelto">Devueltos</option>
              </select>
            </div>
          </div>

          <div className="solicitudes-list">
            {solicitudesFiltradas.length === 0 ? (
              <div className="no-solicitudes">
                <div className="no-solicitudes-icon">📋</div>
                <h3>No hay solicitudes</h3>
                <p>No se encontraron solicitudes con el filtro seleccionado.</p>
              </div>
            ) : (
              solicitudesFiltradas.map((solicitud) => (
                <div key={solicitud.id} className="solicitud-card">
                  <div className="solicitud-header">
                    <div className="solicitud-info">
                      <h3 className="equipo-nombre">
                        {solicitud.nombreEquipo}
                      </h3>
                      <span className="solicitud-id">ID: {solicitud.id}</span>
                    </div>
                    <div className="solicitud-estado">
                      <span
                        className={`estado-badge ${getEstadoClass(solicitud.estado)}`}
                      >
                        {getEstadoText(solicitud.estado)}
                      </span>
                    </div>
                  </div>

                  <div className="solicitud-content">
                    <div className="solicitud-fechas">
                      <div className="fecha-item">
                        <span className="fecha-label">Préstamo:</span>
                        <span className="fecha-valor">
                          {formatearFecha(solicitud.fechaPrestamo)}
                        </span>
                      </div>
                      <div className="fecha-item">
                        <span className="fecha-label">Devolución:</span>
                        <span className="fecha-valor">
                          {formatearFecha(solicitud.fechaDevolucion)}
                        </span>
                      </div>
                      <div className="fecha-item">
                        <span className="fecha-label">Solicitado:</span>
                        <span className="fecha-valor">
                          {formatearFecha(solicitud.fechaSolicitud)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="solicitud-actions">
                    {solicitud.estado === "en_uso" && (
                      <button
                        className="btn-action btn-return"
                        onClick={() => marcarComoDevuelto(solicitud.id)}
                      >
                        Marcar como Devuelto
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolicitarEquipos;
