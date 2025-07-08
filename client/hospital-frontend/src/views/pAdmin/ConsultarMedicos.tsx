import './styles/consultarMedicos.scss';

const ConsultarMedicos = () => {
  return (
    <div className="main-content-section consultar-medicos-container">
      <div className="medicos-header">
        <div>
          <h2>Consultar Médicos</h2>
        </div>
      </div>

      <div className="medicos-content">
        <div className="search-section">
          <input 
            type="text" 
            placeholder="Buscar médico por nombre, especialidad..."
            className="search-input"
          />
          <button className="search-btn">Buscar</button>
        </div>
        
        <div className="medicos-list">
          <div className="medico-card">
            <div className="medico-info">
              <h3>Dr. Juan Pérez</h3>
              <p className="especialidad">Cardiología</p>
              <p className="email">juan.perez@hospital.com</p>
              <p className="telefono">+34 123 456 789</p>
            </div>
            <div className="medico-actions">
              <button className="btn-action secondary">Ver perfil</button>
              <button className="btn-action primary">Ver agenda</button>
            </div>
          </div>
          
          <div className="medico-card">
            <div className="medico-info">
              <h3>Dra. María García</h3>
              <p className="especialidad">Pediatría</p>
              <p className="email">maria.garcia@hospital.com</p>
              <p className="telefono">+34 987 654 321</p>
            </div>
            <div className="medico-actions">
              <button className="btn-action secondary">Ver perfil</button>
              <button className="btn-action primary">Ver agenda</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultarMedicos;
