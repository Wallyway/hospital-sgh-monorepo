import { useState, useMemo } from 'react';
import type { Patient } from '../../types/patient';
import { mockPatients } from '../../types/patient';
import './styles/consultarPacientes.scss';

const ConsultarPacientes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [patients] = useState<Patient[]>(mockPatients);

  // Filter patients based on search term
  const filteredPatients = useMemo(() => {
    if (!searchTerm) return patients;
    
    const term = searchTerm.toLowerCase();
    return patients.filter(patient => 
      patient.nombre.toLowerCase().includes(term) ||
      patient.dni.toLowerCase().includes(term) ||
      patient.telefono.toLowerCase().includes(term) ||
      patient.email.toLowerCase().includes(term)
    );
  }, [patients, searchTerm]);

  const handleSearch = () => {
    // This could trigger an API call in a real application
    console.log('Searching for:', searchTerm);
  };

  const handleViewPatient = (patientId: string) => {
    console.log('View patient:', patientId);
    // Navigate to patient details
  };

  const handleEditPatient = (patientId: string) => {
    console.log('Edit patient:', patientId);
    // Navigate to edit patient form
  };

  const handleViewHistory = (patientId: string) => {
    console.log('View history for patient:', patientId);
    // Navigate to medical history
  };

  const getSeguroBadgeClass = (seguro: string) => {
    switch (seguro) {
      case 'publico': return 'publico';
      case 'privado': return 'privado';
      case 'mutua': return 'mutua';
      default: return 'publico';
    }
  };

  const getSeguroDisplayName = (seguro: string) => {
    switch (seguro) {
      case 'publico': return 'Sistema Público';
      case 'privado': return 'Seguro Privado';
      case 'mutua': return 'Mutua';
      default: return 'Sistema Público';
    }
  };

  return (
    <div className="main-content-section consultar-pacientes-container">
      <div className="consultar-pacientes-header">
        <div className="header-title-row">
          <h1>Consultar Pacientes</h1>
        </div>
      </div>

      <div className="consultar-pacientes-content">
        <div className="search-section">
          <input 
            type="text" 
            placeholder="Buscar paciente por nombre, DNI o teléfono..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button className="search-btn" onClick={handleSearch}>
            Buscar
          </button>
        </div>
        
        <div className="patients-grid">
          {filteredPatients.length > 0 ? (
            filteredPatients.map((patient) => (
              <div key={patient.id} className="patient-card">
                <div className="card-header">
                  <div className="patient-info">
                    <h3>{patient.nombre}</h3>
                    <span className="email">{patient.email}</span>
                  </div>
                  <span className={`badge ${getSeguroBadgeClass(patient.seguroMedico)}`}>
                    {getSeguroDisplayName(patient.seguroMedico)}
                  </span>
                </div>
                <div className="card-body">
                  <div className="info-row">
                    <span className="label">DNI:</span>
                    <span className="value">{patient.dni}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Teléfono:</span>
                    <span className="value">{patient.telefono}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Última visita:</span>
                    <span className="value">{patient.ultimaVisita}</span>
                  </div>
                  {patient.edad && (
                    <div className="info-row">
                      <span className="label">Edad:</span>
                      <span className="value">{patient.edad} años</span>
                    </div>
                  )}
                </div>
                <div className="card-actions">
                  <button 
                    className="btn-view"
                    onClick={() => handleViewPatient(patient.id)}
                  >
                    Ver
                  </button>
                  <button 
                    className="btn-edit"
                    onClick={() => handleEditPatient(patient.id)}
                  >
                    Editar
                  </button>
                  <button 
                    className="btn-history"
                    onClick={() => handleViewHistory(patient.id)}
                  >
                    Historial
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-patients">
              <h3>No se encontraron pacientes</h3>
              <p>Intenta modificar los términos de búsqueda</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultarPacientes;
