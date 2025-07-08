import { useState, useMemo } from 'react';
import type { Appointment } from '../../types/patient';
import { mockAppointments } from '../../types/patient';
import './styles/gestionarCitasPacientes.scss';

const GestionarCitasPacientes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [appointments, setAppointments] = useState<Appointment[]>(mockAppointments);

  // Filter appointments based on search term
  const filteredAppointments = useMemo(() => {
    if (!searchTerm) return appointments;
    
    const term = searchTerm.toLowerCase();
    return appointments.filter(appointment => 
      appointment.pacienteNombre.toLowerCase().includes(term) ||
      appointment.medico.toLowerCase().includes(term) ||
      appointment.especialidad.toLowerCase().includes(term) ||
      appointment.fecha.toLowerCase().includes(term)
    );
  }, [appointments, searchTerm]);

  const handleSearch = () => {
    console.log('Searching appointments for:', searchTerm);
  };

  const handleAcceptAppointment = (appointmentId: string) => {
    setAppointments(prev => 
      prev.map(apt => 
        apt.id === appointmentId 
          ? { ...apt, estado: 'confirmada' as const }
          : apt
      )
    );
    console.log('Appointment accepted:', appointmentId);
  };

  const handleCancelAppointment = (appointmentId: string) => {
    if (window.confirm('¿Está seguro de que desea cancelar esta cita?')) {
      setAppointments(prev => 
        prev.map(apt => 
          apt.id === appointmentId 
            ? { ...apt, estado: 'cancelada' as const }
            : apt
        )
      );
      console.log('Appointment cancelled:', appointmentId);
    }
  };

  const getStatusBadgeClass = (estado: string) => {
    switch (estado) {
      case 'confirmada': return 'confirmed';
      case 'cancelada': return 'cancelled';
      case 'completada': return 'completed';
      default: return 'pending';
    }
  };

  const getStatusDisplayName = (estado: string) => {
    switch (estado) {
      case 'confirmada': return 'Confirmada';
      case 'cancelada': return 'Cancelada';
      case 'completada': return 'Completada';
      case 'pendiente': return 'Pendiente';
      default: return 'Pendiente';
    }
  };

  return (
    <div className="main-content-section gestionar-citas-container">
      <div className="citas-header">
        <div>
          <h2>Gestionar Citas Pacientes</h2>
        </div>
      </div>

      <div className="citas-content">
        <div className="search-section">
          <input 
            type="text" 
            placeholder="Buscar cita por paciente, médico o fecha..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button className="search-btn" onClick={handleSearch}>
            Buscar
          </button>
        </div>
        
        <div className="citas-list">
          {filteredAppointments.length > 0 ? (
            filteredAppointments.map((appointment) => (
              <div key={appointment.id} className={`cita-card ${getStatusBadgeClass(appointment.estado)}`}>
                <div className="cita-info">
                  <div className="cita-header-info">
                    <div className="patient-info">
                      <h3>{appointment.pacienteNombre}</h3>
                      <span className="fecha">{appointment.fecha} - {appointment.hora}</span>
                    </div>
                    <div className={`status-badge ${getStatusBadgeClass(appointment.estado)}`}>
                      {getStatusDisplayName(appointment.estado)}
                    </div>
                  </div>
                  <p className="medico">{appointment.medico} - {appointment.especialidad}</p>
                  <p className="motivo">{appointment.motivo}</p>
                </div>
                <div className="cita-actions">
                  {appointment.estado === 'pendiente' && (
                    <>
                      <button 
                        className="btn-action accept"
                        onClick={() => handleAcceptAppointment(appointment.id)}
                      >
                        Aceptar
                      </button>
                      <button 
                        className="btn-action cancel"
                        onClick={() => handleCancelAppointment(appointment.id)}
                      >
                        Cancelar
                      </button>
                    </>
                  )}
                  {appointment.estado === 'confirmada' && (
                    <button 
                      className="btn-action cancel"
                      onClick={() => handleCancelAppointment(appointment.id)}
                    >
                      Cancelar
                    </button>
                  )}
                  {(appointment.estado === 'cancelada' || appointment.estado === 'completada') && (
                    <span className="status-text">
                      {getStatusDisplayName(appointment.estado)}
                    </span>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="no-appointments">
              <h3>No se encontraron citas</h3>
              <p>Intenta modificar los términos de búsqueda</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GestionarCitasPacientes;
