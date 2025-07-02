import { Calendar24 } from "@components/ui/Calendar24";

const Agendar = () => (
  <div className="main-content-section agendar-cita-section">
    <div className="agenda-subtitle">
      <h2>Selecciona los detalles de tu cita</h2>
    </div>
    <form className="agenda-form">
      <div className="agenda-form-row">
        <div className="agenda-form-group">
          <label className="agenda-label">Selecciona Especialidad</label>
          <select className="agenda-select">
            <option value="">Selecciona una especialidad</option>
            <option value="medicina">Medicina General</option>
            <option value="pediatria">Pediatría</option>
            <option value="dermatologia">Dermatología</option>
          </select>
        </div>
        <div className="agenda-form-group">
          <label className="agenda-label">Selecciona Médico</label>
          <select className="agenda-select">
            <option value="">Selecciona un médico</option>
            <option value="juan">Dr. Juan Pérez</option>
            <option value="ana">Dra. Ana Gómez</option>
          </select>
        </div>
      </div>
      <div className="agenda-calendar-group">
        <label className="agenda-label">Disponibilidad</label>
        <Calendar24 />
      </div>
      <div className="agenda-actions">
        <button type="submit" className="agenda-btn agenda-btn-primary">
          Confirmar Cita
        </button>
        <button type="button" className="agenda-btn agenda-btn-secondary">
          Cancelar
        </button>
      </div>
    </form>
  </div>
);

export default Agendar;
