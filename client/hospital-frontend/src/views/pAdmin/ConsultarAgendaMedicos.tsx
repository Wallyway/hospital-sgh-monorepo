import './styles/consultarAgendaMedicos.scss';

const ConsultarAgendaMedicos = () => {
  return (
    <div className="main-content-section consultar-agenda-medicos-container">
      <div className="agenda-header">
        <div>
          <h2>Consultar Agenda Médicos</h2>
        </div>
      </div>

      <div className="agenda-content">
        <div className="filters-section">
          <select className="medico-select">
            <option value="">Seleccionar médico</option>
            <option value="1">Dr. Juan Pérez - Cardiología</option>
            <option value="2">Dra. María García - Pediatría</option>
          </select>
          
          <input 
            type="date" 
            className="date-input"
          />
          
          <button className="filter-btn">Filtrar</button>
        </div>
        
        <div className="agenda-container">
          <div className="time-slots">
            <h3>Agenda del Dr. Juan Pérez - 15/01/2024</h3>
            
            <div className="slot occupied">
              <span className="time">09:00 - 09:30</span>
              <span className="patient">Juan Martínez</span>
              <span className="status ocupado">Ocupado</span>
            </div>
            
            <div className="slot available">
              <span className="time">09:30 - 10:00</span>
              <span className="patient">-</span>
              <span className="status disponible">Disponible</span>
            </div>
            
            <div className="slot occupied">
              <span className="time">10:00 - 10:30</span>
              <span className="patient">Ana López</span>
              <span className="status ocupado">Ocupado</span>
            </div>
            
            <div className="slot available">
              <span className="time">10:30 - 11:00</span>
              <span className="patient">-</span>
              <span className="status disponible">Disponible</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultarAgendaMedicos;
