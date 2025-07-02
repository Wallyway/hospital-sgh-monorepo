import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Calendar24 } from "@components/ui/Calendar24";
import "./styles/medicalRecord.scss";

interface HistoriaClinicaEntry {
  id: string;
  fecha: string;
  hora: string;
  tipoConsulta: string;
  diagnostico: string;
  observaciones: string;
  medicamentos: {
    nombre: string;
    posologia: string;
    farmacia: string;
    particular: boolean;
  }[];
  medico: string;
  especialidad: string;
}

const HistoriaClinica = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const patientId = searchParams.get('patientId') || '';
  const [fechaDesde, setFechaDesde] = useState<Date>(new Date(2025, 0, 1)); // Comenzar desde enero 2025 para mostrar todas las entradas
  
  // Mock data - en producción vendría de la API
  const pacienteInfo = {
    id: patientId,
    nombre: "María González",
    edad: 35,
    dni: "12345678",
    telefono: "+54 11 2345-6789",
    email: "maria.gonzalez@email.com",
    obraSocial: "OSDE",
    planObraSocial: "210"
  };

  const historiaClinica: HistoriaClinicaEntry[] = [
    {
      id: "HC001",
      fecha: "2025-07-02",
      hora: "09:00",
      tipoConsulta: "Consulta General",
      diagnostico: "Hipertensión arterial leve",
      observaciones: "Paciente refiere cefaleas matutinas. Presión arterial: 140/90 mmHg. Se indica control dietético y medicación.",
      medicamentos: [
        {
          nombre: "Enalapril 10mg",
          posologia: "1 comprimido cada 12 horas",
          farmacia: "Farmacia Central",
          particular: false
        },
        {
          nombre: "Aspirina 100mg",
          posologia: "1 comprimido por día",
          farmacia: "Farmacia San Juan",
          particular: true
        }
      ],
      medico: "Dr. Carlos Mendoza",
      especialidad: "Cardiología"
    },
    {
      id: "HC002",
      fecha: "2025-07-01",
      hora: "14:30",
      tipoConsulta: "Control de Rutina",
      diagnostico: "Estado general bueno",
      observaciones: "Control de rutina. Paciente asintomática. Análisis de laboratorio dentro de parámetros normales.",
      medicamentos: [],
      medico: "Dra. Ana Rodríguez",
      especialidad: "Medicina General"
    },
    {
      id: "HC003",
      fecha: "2025-06-15",
      hora: "11:15",
      tipoConsulta: "Primera Consulta",
      diagnostico: "Evaluación inicial",
      observaciones: "Primera consulta. Paciente refiere antecedentes familiares de hipertensión. Se solicitan estudios complementarios.",
      medicamentos: [
        {
          nombre: "Complejo B",
          posologia: "1 comprimido por día",
          farmacia: "Farmacia del Hospital",
          particular: false
        }
      ],
      medico: "Dr. Luis Martínez",
      especialidad: "Medicina General"
    },
    {
      id: "HC004",
      fecha: "2025-05-20",
      hora: "16:00",
      tipoConsulta: "Consulta de Seguimiento",
      diagnostico: "Control cardiovascular",
      observaciones: "Seguimiento post estudios. ECG normal. Se mantiene tratamiento actual y se citan controles mensuales.",
      medicamentos: [
        {
          nombre: "Enalapril 5mg",
          posologia: "1 comprimido cada 12 horas",
          farmacia: "Farmacia Central",
          particular: false
        }
      ],
      medico: "Dr. Carlos Mendoza",
      especialidad: "Cardiología"
    },
    {
      id: "HC005",
      fecha: "2025-04-10",
      hora: "10:30",
      tipoConsulta: "Consulta de Emergencia",
      diagnostico: "Pico hipertensivo",
      observaciones: "Paciente llega con presión arterial elevada: 180/100 mmHg. Se administra medicación antihipertensiva. Respuesta favorable.",
      medicamentos: [
        {
          nombre: "Nifedipino 10mg",
          posologia: "1 comprimido sublingual",
          farmacia: "Farmacia de Emergencia",
          particular: false
        }
      ],
      medico: "Dr. Roberto Silva",
      especialidad: "Medicina de Emergencia"
    }
  ];

  // Filtrar entradas desde la fecha seleccionada (inclusive)
  const entradasFiltradas = historiaClinica.filter(entrada => {
    // Parser seguro de fechas para evitar problemas de zona horaria
    const [año, mes, dia] = entrada.fecha.split('-').map(Number);
    const fechaEntrada = new Date(año, mes - 1, dia);
    const fechaFiltro = new Date(fechaDesde);
    
    // Normalizar fechas para comparar solo día, mes y año
    fechaEntrada.setHours(0, 0, 0, 0);
    fechaFiltro.setHours(0, 0, 0, 0);
    
    return fechaEntrada >= fechaFiltro;
  }).sort((a, b) => {
    // Ordenar por fecha descendente usando el mismo parser seguro
    const [añoA, mesA, diaA] = a.fecha.split('-').map(Number);
    const [añoB, mesB, diaB] = b.fecha.split('-').map(Number);
    const fechaA = new Date(añoA, mesA - 1, diaA);
    const fechaB = new Date(añoB, mesB - 1, diaB);
    return fechaB.getTime() - fechaA.getTime();
  });

  const formatearFecha = (fecha: string) => {
    // Crear fecha usando los componentes individuales para evitar problemas de zona horaria
    const [año, mes, dia] = fecha.split('-').map(Number);
    const fechaLocal = new Date(año, mes - 1, dia); // mes - 1 porque los meses en JS van de 0-11
    
    return fechaLocal.toLocaleDateString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="main-content-section historia-clinica-container">
      <div className="hc-header">
        <div className="patient-info-header">
          <div className="header-title-row">
            <h1>Historia Clínica</h1>
            <button 
              className="btn-back"
              onClick={() => navigate('/medic/agenda')}
            >
              ← Volver a Agenda
            </button>
          </div>
          <div className="patient-details">
            <h2>{pacienteInfo.nombre}</h2>
            <div className="patient-info-grid">
              <div className="info-item">
                <span className="label">ID:</span>
                <span className="value">{pacienteInfo.id}</span>
              </div>
              <div className="info-item">
                <span className="label">DNI:</span>
                <span className="value">{pacienteInfo.dni}</span>
              </div>
              <div className="info-item">
                <span className="label">Edad:</span>
                <span className="value">{pacienteInfo.edad} años</span>
              </div>
              <div className="info-item">
                <span className="label">Teléfono:</span>
                <span className="value">{pacienteInfo.telefono}</span>
              </div>
              <div className="info-item">
                <span className="label">Email:</span>
                <span className="value">{pacienteInfo.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hc-filters">
        <div className="filter-section">
          <label className="filter-label">Ver registros desde:</label>
          <div className="date-filter">
            <Calendar24 
              date={fechaDesde}
              onDateChange={(date) => {
                if (date) {
                  setFechaDesde(date);
                }
              }}
              showTime={false}
            />
          </div>
        </div>
        <div className="results-count">
          <span>{entradasFiltradas.length} registro(s) encontrado(s)</span>
        </div>
      </div>

      <div className="hc-timeline">
        {entradasFiltradas.length === 0 ? (
          <div className="no-records">
            <div className="no-records-icon">📋</div>
            <h3>No se encontraron registros</h3>
            <p>No hay registros médicos desde la fecha seleccionada: {fechaDesde.toLocaleDateString("es-ES")}</p>
            <p>Intenta seleccionar una fecha anterior para ver más registros.</p>
          </div>
        ) : (
          entradasFiltradas.map((entrada) => (
            <div key={entrada.id} className="hc-entry">
              <div className="entry-header">
                <div className="entry-date-time">
                  <div className="date">{formatearFecha(entrada.fecha)}</div>
                  <div className="time">{entrada.hora}</div>
                </div>
                <div className="entry-type">
                  <span className="type-badge">{entrada.tipoConsulta}</span>
                </div>
              </div>
              
              <div className="entry-content">
                <div className="entry-section">
                  <h4>Diagnóstico</h4>
                  <p>{entrada.diagnostico}</p>
                </div>
                
                <div className="entry-section">
                  <h4>Observaciones</h4>
                  <p>{entrada.observaciones}</p>
                </div>
                
                {entrada.medicamentos.length > 0 && (
                  <div className="entry-section">
                    <h4>Medicamentos Recetados</h4>
                    <div className="medicamentos-list">
                      {entrada.medicamentos.map((med, medIndex) => (
                        <div key={medIndex} className="medicamento-item">
                          <div className="med-name">{med.nombre}</div>
                          <div className="med-details">
                            <span className="posologia">{med.posologia}</span>
                            <span className="farmacia">Farmacia: {med.farmacia}</span>
                            {med.particular && <span className="particular">Particular</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="entry-footer">
                  <div className="medico-info">
                    <span className="medico">{entrada.medico}</span>
                    <span className="especialidad">{entrada.especialidad}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HistoriaClinica;
