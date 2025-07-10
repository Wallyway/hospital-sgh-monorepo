import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useGetEquipments, useRequestEquipment } from "@/db/queries/medic";
import "./styles/requestEquipment.scss";

// Interfaz para los equipos según la API
interface Equipment {
  idEquipamiento: number;
  idDepartamento: number;
  nombre: string;
  estado: "D" | "P"; // D = Disponible, P = Prestado
  FContratacion: string;
}

// Interfaz para las solicitudes de equipos
interface EquipmentRequest {
  id: string;
  nombreEquipo: string;
  fechaPrestamo: string;
  fechaDevolucion: string;
  estado: "D" | "P";
  medicoSolicitante: string;
  observaciones: string;
  fechaSolicitud: string;
}

const SolicitarEquipos = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  
  // Usar el hook existente para obtener equipos
  const { fetchData: fetchEquipments, loading: equipmentLoading, error: equipmentError } = useGetEquipments();
  
  // Usar el hook para solicitar equipos
  const { post: requestEquipment, postLoading: requestLoading, postError: requestError } = useRequestEquipment();
  
  const fechaPrestamo = new Date(); 
  const [filtroEstado, setFiltroEstado] = useState<string>("todos");
  const [equipos, setEquipos] = useState<Equipment[]>([]);

  const [nuevaSolicitud, setNuevaSolicitud] = useState({
    idEquipamiento: 0,
    observaciones: "",
  });

  // Convertir equipos a formato de solicitudes
  const solicitudesExistentes: EquipmentRequest[] = equipos.map((equipo) => ({
    id: `EQ-${equipo.idEquipamiento.toString().padStart(3, '0')}`,
    nombreEquipo: equipo.nombre,
    fechaPrestamo: new Date(equipo.FContratacion).toISOString().split("T")[0],
    fechaDevolucion: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0], // 7 días después
    estado: equipo.estado,
    medicoSolicitante: "Dr. Usuario Actual", // Placeholder para el médico actual
    observaciones: "Solicitud de equipo",
    fechaSolicitud: new Date(equipo.FContratacion).toISOString().split("T")[0],
  }));

  // Cargar equipos disponibles desde la API
  useEffect(() => {
    const loadEquipments = async () => {
      if (!isAuthenticated) return;
      
      try {
        const equiposData = await fetchEquipments();
        setEquipos(equiposData || []);
      } catch (error) {
        console.error('Error al cargar equipos:', error);
      }
    };

    loadEquipments();
  }, [isAuthenticated, fetchEquipments]);



  // Filtrar solo equipos disponibles (estado 'D') para el select
  const equiposParaSelect = equipos.filter((equipo: Equipment) => equipo.estado === 'D');

  // Función para marcar equipo como devuelto
  const marcarComoDevuelto = (solicitudId: string) => {
    // Extraer el ID del equipo del ID de la solicitud
    const equipoId = parseInt(solicitudId.replace('EQ-', ''));
    
    // Actualizar el estado del equipo en la lista
    setEquipos((prevEquipos) =>
      prevEquipos.map((equipo) =>
        equipo.idEquipamiento === equipoId
          ? {
              ...equipo,
              estado: "D" as const, // Disponible (devuelto)
            }
          : equipo
      )
    );
  };

  // Filtrar solicitudes según el estado seleccionado
  const solicitudesFiltradas =
    filtroEstado === "todos"
      ? solicitudesExistentes
      : filtroEstado === "en_uso"
      ? solicitudesExistentes.filter((solicitud) => solicitud.estado === "P")
      : filtroEstado === "devuelto"
      ? solicitudesExistentes.filter((solicitud) => solicitud.estado === "D")
      : solicitudesExistentes;

  // Función para obtener la clase CSS según el estado
  const getEstadoClass = (estado: string) => {
    switch (estado) {
      case "P":
        return "estado-en-uso";
      case "D":
        return "estado-devuelto";
      default:
        return "";
    }
  };

  // Función para obtener el texto del estado
  const getEstadoText = (estado: string) => {
    switch (estado) {
      case "P":
        return "EN USO";
      case "D":
        return "DISPONIBLE";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nuevaSolicitud.idEquipamiento) {
      alert("Por favor selecciona un equipo");
      return;
    }

    // Crear fechas: préstamo actual y devolución 30 minutos después
    const fechaPrestamo = new Date();
    const fechaDevolucion = new Date(fechaPrestamo.getTime() + 30 * 60 * 1000); // 30 minutos después

    const requestData = {
      idEquipamiento: nuevaSolicitud.idEquipamiento,
      FPrestamo: fechaPrestamo.toISOString(),
      FDevolucion: fechaDevolucion.toISOString(),
    };

    try {
      await requestEquipment(requestData);

      // Resetear formulario
      setNuevaSolicitud({
        idEquipamiento: 0,
        observaciones: "",
      });

      // Recargar equipos para actualizar disponibilidad
      if (isAuthenticated) {
        try {
          const equiposActualizados = await fetchEquipments();
          setEquipos(equiposActualizados || []);
        } catch (refreshError) {
          console.error('Error al actualizar lista de equipos:', refreshError);
        }
      }

      alert("Solicitud enviada correctamente");
    } catch (error: any) {
      console.error("Error al enviar solicitud:", error);
      alert(`Error al enviar la solicitud: ${error.message || 'Error desconocido'}`);
    }
  };

  return (
    <div className="main-content-section solicitar-equipos-container">
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
                {equipmentLoading ? (
                  <div className="loading-message">Cargando equipos...</div>
                ) : equipmentError ? (
                  <div className="error-message">{equipmentError}</div>
                ) : (
                  <select
                    className="form-select"
                    value={nuevaSolicitud.idEquipamiento}
                    onChange={(e) =>
                      setNuevaSolicitud({
                        ...nuevaSolicitud,
                        idEquipamiento: parseInt(e.target.value),
                      })
                    }
                    required
                  >
                    <option value={0}>Selecciona un equipo</option>
                    {equiposParaSelect.map((equipo) => (
                      <option key={equipo.idEquipamiento} value={equipo.idEquipamiento}>
                        {equipo.nombre}
                      </option>
                    ))}
                  </select>
                )}
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
              <button 
                type="submit" 
                className="btn-primary"
                disabled={requestLoading}
              >
                {requestLoading ? 'Enviando...' : 'Enviar Solicitud'}
              </button>
              {requestError && (
                <div className="error-message" style={{ marginTop: '10px', color: 'red' }}>
                  {requestError}
                </div>
              )}
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
                    {solicitud.estado === "P" && (
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
