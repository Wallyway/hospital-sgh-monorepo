import { useState } from 'react';
import type { PatientFormData } from '../../types/patient';
import './styles/agregarPacientes.scss';

const AgregarPacientes = () => {
  const [formData, setFormData] = useState<PatientFormData>({
    nombre: '',
    apellidos: '',
    dni: '',
    fechaNacimiento: '',
    telefono: '',
    email: '',
    direccion: '',
    seguroMedico: '',
    numeroSeguro: '',
    alergias: '',
    observacionesMedicas: ''
  });

  const [errors, setErrors] = useState<Partial<PatientFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof PatientFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<PatientFormData> = {};
    
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio';
    if (!formData.apellidos.trim()) newErrors.apellidos = 'Los apellidos son obligatorios';
    if (!formData.dni.trim()) newErrors.dni = 'El DNI es obligatorio';
    if (!formData.fechaNacimiento) newErrors.fechaNacimiento = 'La fecha de nacimiento es obligatoria';
    if (!formData.telefono.trim()) newErrors.telefono = 'El teléfono es obligatorio';
    
    // Validate email format if provided
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Formato de email inválido';
    }
    
    // Validate DNI format (basic Spanish DNI validation)
    if (formData.dni && !/^\d{8}[A-Za-z]$/.test(formData.dni)) {
      newErrors.dni = 'Formato de DNI inválido (ej: 12345678A)';
    }
    
    // Validate phone format
    if (formData.telefono && !/^(\+34\s?)?[6-9]\d{8}$/.test(formData.telefono.replace(/\s/g, ''))) {
      newErrors.telefono = 'Formato de teléfono inválido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Here you would typically send the data to an API
      console.log('Submitting patient data:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message and reset form
      alert('Paciente agregado exitosamente');
      setFormData({
        nombre: '',
        apellidos: '',
        dni: '',
        fechaNacimiento: '',
        telefono: '',
        email: '',
        direccion: '',
        seguroMedico: '',
        numeroSeguro: '',
        alergias: '',
        observacionesMedicas: ''
      });
      
    } catch (error) {
      console.error('Error adding patient:', error);
      alert('Error al agregar paciente. Por favor, intente nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (window.confirm('¿Está seguro de que desea cancelar? Se perderán los datos ingresados.')) {
      setFormData({
        nombre: '',
        apellidos: '',
        dni: '',
        fechaNacimiento: '',
        telefono: '',
        email: '',
        direccion: '',
        seguroMedico: '',
        numeroSeguro: '',
        alergias: '',
        observacionesMedicas: ''
      });
      setErrors({});
    }
  };

  return (
    <div className="main-content-section agregar-pacientes-container">
      <div className="agregar-pacientes-header">
        <div className="header-title-row">
          <h1>Agregar Nuevo Paciente</h1>
        </div>
      </div>

      <div className="agregar-pacientes-content">
        <div className="form-section">
          <form className="patient-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>Nombre *</label>
                <input 
                  type="text" 
                  className={`form-input ${errors.nombre ? 'error' : ''}`}
                  placeholder="Nombre del paciente" 
                  value={formData.nombre}
                  onChange={(e) => handleInputChange('nombre', e.target.value)}
                />
                {errors.nombre && <span className="error-message">{errors.nombre}</span>}
              </div>
              
              <div className="form-group">
                <label>Apellidos *</label>
                <input 
                  type="text" 
                  className={`form-input ${errors.apellidos ? 'error' : ''}`}
                  placeholder="Apellidos del paciente" 
                  value={formData.apellidos}
                  onChange={(e) => handleInputChange('apellidos', e.target.value)}
                />
                {errors.apellidos && <span className="error-message">{errors.apellidos}</span>}
              </div>
              
              <div className="form-group">
                <label>DNI *</label>
                <input 
                  type="text" 
                  className={`form-input ${errors.dni ? 'error' : ''}`}
                  placeholder="12345678A" 
                  value={formData.dni}
                  onChange={(e) => handleInputChange('dni', e.target.value.toUpperCase())}
                />
                {errors.dni && <span className="error-message">{errors.dni}</span>}
              </div>
              
              <div className="form-group">
                <label>Fecha de nacimiento *</label>
                <input 
                  type="date" 
                  className={`form-input ${errors.fechaNacimiento ? 'error' : ''}`}
                  value={formData.fechaNacimiento}
                  onChange={(e) => handleInputChange('fechaNacimiento', e.target.value)}
                />
                {errors.fechaNacimiento && <span className="error-message">{errors.fechaNacimiento}</span>}
              </div>
              
              <div className="form-group">
                <label>Teléfono *</label>
                <input 
                  type="tel" 
                  className={`form-input ${errors.telefono ? 'error' : ''}`}
                  placeholder="+34 123 456 789" 
                  value={formData.telefono}
                  onChange={(e) => handleInputChange('telefono', e.target.value)}
                />
                {errors.telefono && <span className="error-message">{errors.telefono}</span>}
              </div>
              
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="email" 
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="paciente@email.com" 
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group full-width">
                <label>Dirección</label>
                <input 
                  type="text" 
                  className="form-input"
                  placeholder="Calle, número, ciudad..." 
                  value={formData.direccion}
                  onChange={(e) => handleInputChange('direccion', e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label>Seguro médico</label>
                <select 
                  className="form-select"
                  value={formData.seguroMedico}
                  onChange={(e) => handleInputChange('seguroMedico', e.target.value)}
                >
                  <option value="">Seleccionar seguro</option>
                  <option value="publico">Sistema Público</option>
                  <option value="privado">Seguro Privado</option>
                  <option value="mutua">Mutua</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Número de seguro</label>
                <input 
                  type="text" 
                  className="form-input"
                  placeholder="Número de póliza/afiliación" 
                  value={formData.numeroSeguro}
                  onChange={(e) => handleInputChange('numeroSeguro', e.target.value)}
                />
              </div>
              
              <div className="form-group full-width">
                <label>Alergias conocidas</label>
                <textarea 
                  className="form-textarea"
                  placeholder="Describir alergias conocidas o medicamentos que no puede tomar..."
                  value={formData.alergias}
                  onChange={(e) => handleInputChange('alergias', e.target.value)}
                />
              </div>
              
              <div className="form-group full-width">
                <label>Observaciones médicas</label>
                <textarea 
                  className="form-textarea"
                  placeholder="Información médica relevante..."
                  value={formData.observacionesMedicas}
                  onChange={(e) => handleInputChange('observacionesMedicas', e.target.value)}
                />
              </div>
            </div>
            
            <div className="form-actions">
              <button 
                type="button" 
                className="btn-secondary"
                onClick={handleCancel}
                disabled={isSubmitting}
              >
                Cancelar
              </button>
              <button 
                type="submit" 
                className="btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Agregando...' : 'Agregar Paciente'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AgregarPacientes;
