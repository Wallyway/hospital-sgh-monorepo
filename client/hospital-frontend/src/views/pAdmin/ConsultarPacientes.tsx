import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
// contexts
import { useAuth } from "@contexts/AuthContext";
// queries
import { useGetPatients } from "@db/queries/admin";
// styles
import './styles/consultarPacientes.scss';

interface Patient {
  idUsuario: string;
  nombre: string;
  email: string;
  passwordHash: string;
  genero: 'M' | 'F';
  direccion: string;
  fechaNacimiento: string;
  createdAt: string;
  updatedAt: string;
}

const ConsultarPacientes = () => {
  const { patients } = useConsultarPacientes();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Filter patients based on search term
  const filteredPatients = useMemo(() => {
    if (!searchTerm) return patients;
    
    const term = searchTerm.toLowerCase();
    return patients.filter(patient => 
      patient.nombre.toLowerCase().includes(term) ||
      patient.email.toLowerCase().includes(term) ||
      patient.direccion.toLowerCase().includes(term)
    );
  }, [patients, searchTerm]);

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  const handleEditPatient = (patientId: string) => {
    // Navegar a la vista de modificar datos con el ID del paciente como parámetro de ruta
    navigate(`/padmin/modificar-datos-pacientes/${patientId}`);
  };

  const calculateAge = (fechaNacimiento: string) => {
    const birthDate = new Date(fechaNacimiento);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  const formatUTCDate = (dateString: string) => {
    const date = new Date(dateString);
    // Usar getUTC methods para evitar problemas de zona horaria
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
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
            placeholder="Buscar paciente por nombre, email o dirección..."
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
            filteredPatients.map((patient: Patient) => (
              <div key={patient.idUsuario} className="patient-card">
                <div className="card-header">
                  <div className="patient-info">
                    <h3>{patient.nombre}</h3>
                    <span className="email">{patient.email}</span>
                  </div>
                  <span className={`badge ${patient.genero === 'M' ? 'masculino' : 'femenino'}`}>
                    {patient.genero === 'M' ? 'Masculino' : 'Femenino'}
                  </span>
                </div>
                <div className="card-body">
                  <div className="info-row">
                    <span className="label">ID Usuario:</span>
                    <span className="value">{patient.idUsuario}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Dirección:</span>
                    <span className="value">{patient.direccion}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">F. Nacimiento:</span>
                    <span className="value">
                      {formatUTCDate(patient.fechaNacimiento)}
                    </span>
                  </div>
                  <div className="info-row">
                    <span className="label">Edad:</span>
                    <span className="value">{calculateAge(patient.fechaNacimiento)} años</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Registrado:</span>
                    <span className="value">
                      {formatUTCDate(patient.createdAt)}
                    </span>
                  </div>
                </div>
                <div className="card-actions">
                  <button 
                    className="btn-edit"
                    onClick={() => handleEditPatient(patient.idUsuario)}
                  >
                    Editar
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

const useConsultarPacientes = () => {
  const { fetchData: getPatients } = useGetPatients();
  const { isAuthenticated } = useAuth();

  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const fetchPatients = async () => {
      if (!isAuthenticated) return;

      const patientsData = await getPatients();
      if (patientsData?.fetchError) return;

      if (patientsData && patientsData.length > 0) {
        setPatients(patientsData);
      }
    };
    fetchPatients();
  }, [isAuthenticated]);

  return {
    patients,
  };
};
