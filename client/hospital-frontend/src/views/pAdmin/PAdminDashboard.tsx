import './styles/pAdminDashboard.scss';

const PAdminDashboard = () => {
  return (
    <div className="main-content-section dashboard-container">
      <div className="dashboard-header">
        <div className="header-title-row">
          <h1>Panel de Administración Principal</h1>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="welcome-section">
          <h2>Bienvenido al Panel de Administración Principal</h2>
          <p>Desde aquí puedes gestionar todas las operaciones del hospital relacionadas con médicos y pacientes.</p>
        </div>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Médicos Activos</h3>
          <div className="stat-number">24</div>
        </div>
        
        <div className="stat-card">
          <h3>Pacientes Registrados</h3>
          <div className="stat-number">1,247</div>
        </div>
        
        <div className="stat-card">
          <h3>Citas Hoy</h3>
          <div className="stat-number">67</div>
        </div>
        
        <div className="stat-card">
          <h3>Citas Pendientes</h3>
          <div className="stat-number">142</div>
        </div>
      </div>
      
      <div className="recent-activity">
        <h3>Actividad Reciente</h3>
        <div className="activity-list">
          <div className="activity-item">
            <span className="activity-time">10:30</span>
            <span className="activity-description">Nueva cita asignada a Dr. Juan Pérez</span>
          </div>
          <div className="activity-item">
            <span className="activity-time">09:15</span>
            <span className="activity-description">Paciente Ana López agregado al sistema</span>
          </div>
          <div className="activity-item">
            <span className="activity-time">08:45</span>
            <span className="activity-description">Cita reagendada para Carlos Martínez</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PAdminDashboard; 