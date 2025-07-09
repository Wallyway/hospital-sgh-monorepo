import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// contexts
import { useAuth } from "@contexts/AuthContext";
// queries
import { useGetPatients, useUpdatePatient } from "@db/queries/admin";
// styles
import "./styles/modificarDatosPacientes.scss";

interface Patient {
  idUsuario: string;
  nombre: string;
  email: string;
  passwordHash: string;
  genero: "M" | "F";
  direccion: string;
  fechaNacimiento: string;
  createdAt: string;
  updatedAt: string;
}

interface UpdatePatientData {
  idUsuario: string;
  nombre: string;
  direccion: string;
}

const ModificarDatosPacientes = () => {
  const { patients } = useModificarPacientes();
  const { patch, patchLoading, patchError } = useUpdatePatient();
  const { patientId } = useParams<{ patientId: string }>();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [formData, setFormData] = useState<UpdatePatientData>({
    idUsuario: "",
    nombre: "",
    direccion: "",
  });
  const [errors, setErrors] = useState<Partial<UpdatePatientData>>({});

  // Filter patients based on search term
  const filteredPatients = patients.filter(
    (patient) =>
      patient.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.idUsuario.includes(searchTerm)
  );

  // Auto-select patient if patientId is in URL params
  useEffect(() => {
    if (patientId && patients.length > 0) {
      const patient = patients.find(p => p.idUsuario === patientId);
      if (patient) {
        setSelectedPatient(patient);
        setSearchTerm(''); // Clear search when auto-selecting
      }
    }
  }, [patients, patientId]);

  // Update form when patient is selected
  useEffect(() => {
    if (selectedPatient) {
      setFormData({
        idUsuario: selectedPatient.idUsuario,
        nombre: selectedPatient.nombre,
        direccion: selectedPatient.direccion,
      });
      setErrors({});
    }
  }, [selectedPatient]);

  const handleInputChange = (field: keyof UpdatePatientData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<UpdatePatientData> = {};

    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
    if (!formData.direccion.trim())
      newErrors.direccion = "La dirección es obligatoria";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedPatient) {
      alert("Por favor, selecciona un paciente para modificar");
      return;
    }

    if (!validateForm()) {
      return;
    }

    const result = await patch(formData, selectedPatient.idUsuario);
    if (result?.errorMutationMsg) {
      alert("Error al actualizar el paciente. Por favor, intente nuevamente.");
      return;
    }

    alert("Datos del paciente actualizados exitosamente");
    setSelectedPatient(null);
    setFormData({ idUsuario: "", nombre: "", direccion: "" });
  };

  const handleSelectPatient = (patient: Patient) => {
    setSelectedPatient(patient);
  };

  const handleCancel = () => {
    setSelectedPatient(null);
    setFormData({ idUsuario: "", nombre: "", direccion: "" });
    setErrors({});
  };
  return (
    <div className="main-content-section modificar-datos-pacientes-container">
      <div className="modificar-datos-pacientes-header">
        <div className="header-title-row">
          <h1>Modificar Datos de Pacientes</h1>
        </div>
      </div>

      <div className="modificar-datos-pacientes-content">
        {patchError && (
          <div className="error-banner">
            <p>
              Error al actualizar el paciente. Por favor, intente nuevamente.
            </p>
          </div>
        )}

        <div className="search-patient">
          <h3>Buscar Paciente</h3>
          <div className="search-section">
            <input
              type="text"
              placeholder="Buscar por nombre, email o ID..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {searchTerm && filteredPatients.length > 0 && (
            <div className="patients-list">
              <h4>Resultados de búsqueda ({filteredPatients.length}):</h4>
              <div className="patients-container">
                {filteredPatients.map((patient: Patient) => (
                  <div
                    key={patient.idUsuario}
                    className={`patient-item ${selectedPatient?.idUsuario === patient.idUsuario ? "selected" : ""}`}
                    onClick={() => handleSelectPatient(patient)}
                  >
                    <div className="patient-info">
                      <strong>{patient.nombre}</strong>
                      <span>ID: {patient.idUsuario}</span>
                      <span>{patient.email}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {selectedPatient && (
          <div className="patient-form-section">
            <h3>Modificar Datos del Paciente: {selectedPatient.nombre}</h3>

            <form className="patient-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label>ID Usuario</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.idUsuario}
                    disabled
                  />
                </div>

                <div className="form-group">
                  <label>Nombre *</label>
                  <input
                    type="text"
                    className={`form-input ${errors.nombre ? "error" : ""}`}
                    value={formData.nombre}
                    onChange={(e) =>
                      handleInputChange("nombre", e.target.value)
                    }
                  />
                  {errors.nombre && (
                    <span className="error-message">{errors.nombre}</span>
                  )}
                </div>

                <div className="form-group full-width">
                  <label>Dirección *</label>
                  <input
                    type="text"
                    className={`form-input ${errors.direccion ? "error" : ""}`}
                    value={formData.direccion}
                    onChange={(e) =>
                      handleInputChange("direccion", e.target.value)
                    }
                  />
                  {errors.direccion && (
                    <span className="error-message">{errors.direccion}</span>
                  )}
                </div>
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={handleCancel}
                  disabled={patchLoading}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={patchLoading}
                >
                  {patchLoading ? "Guardando..." : "Guardar Cambios"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModificarDatosPacientes;

const useModificarPacientes = () => {
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
