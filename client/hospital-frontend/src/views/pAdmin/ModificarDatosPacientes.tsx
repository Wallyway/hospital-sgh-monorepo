import './styles/modificarDatosPacientes.scss';

const ModificarDatosPacientes = () => {
  return (
    <div className="main-content-section modificar-datos-pacientes-container">
      <div className="modificar-datos-pacientes-header">
        <div className="header-title-row">
          <h1>Modificar Datos de Pacientes</h1>
        </div>
      </div>

      <div className="modificar-datos-pacientes-content">
        <div className="search-patient">
          <h3>Buscar Paciente</h3>
          <div className="search-section">
            <input 
              type="text" 
              placeholder="Buscar por nombre, DNI o teléfono..."
              className="search-input"
            />
            <button className="search-btn">Buscar</button>
          </div>
        </div>
        
        <div className="patient-form-section">
          <h3>Modificar Datos del Paciente</h3>
          
          <form className="patient-form">
            <div className="form-grid">
              <div className="form-group">
                <label>Nombre *</label>
                <input type="text" className="form-input" defaultValue="Juan" />
              </div>
              
              <div className="form-group">
                <label>Apellidos *</label>
                <input type="text" className="form-input" defaultValue="Martínez López" />
              </div>
              
              <div className="form-group">
                <label>DNI *</label>
                <input type="text" className="form-input" defaultValue="12345678A" disabled />
              </div>
              
              <div className="form-group">
                <label>Fecha de nacimiento *</label>
                <input type="date" className="form-input" defaultValue="1985-06-15" />
              </div>
              
              <div className="form-group">
                <label>Teléfono *</label>
                <input type="tel" className="form-input" defaultValue="+34 123 456 789" />
              </div>
              
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-input" defaultValue="juan.martinez@email.com" />
              </div>
              
              <div className="form-group full-width">
                <label>Dirección</label>
                <input type="text" className="form-input" defaultValue="Calle Mayor 123, 28001 Madrid" />
              </div>
              
              <div className="form-group">
                <label>Seguro médico</label>
                <select className="form-select" defaultValue="publico">
                  <option value="">Seleccionar seguro</option>
                  <option value="publico">Sistema Público</option>
                  <option value="privado">Seguro Privado</option>
                  <option value="mutua">Mutua</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Número de seguro</label>
                <input type="text" className="form-input" defaultValue="SS-123456789" />
              </div>
              
              <div className="form-group full-width">
                <label>Alergias conocidas</label>
                <textarea className="form-textarea" defaultValue="Alérgico a la penicilina"></textarea>
              </div>
              
              <div className="form-group full-width">
                <label>Observaciones médicas</label>
                <textarea className="form-textarea" defaultValue="Hipertensión arterial controlada con medicación"></textarea>
              </div>
            </div>
            
            <div className="form-actions">
              <button type="button" className="btn-secondary">Cancelar</button>
              <button type="submit" className="btn-primary">Guardar Cambios</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModificarDatosPacientes;
