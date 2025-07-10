import { useState } from "react";
import type { PatientFormData } from "../../types/patient";
import { useCreatePatient } from "../../db/queries/admin";
import "./styles/agregarPacientes.scss";

type FormErrors = {
  [K in keyof PatientFormData]?: string;
};

const AgregarPacientes = () => {
  const [formData, setFormData] = useState<PatientFormData>({
    email: "",
    password: "",
    nombre: "",
    direccion: "",
    genero: "",
    fechaNacimiento: "",
    idUsuario: 0,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const { post, postLoading, postError } = useCreatePatient();

  const handleInputChange = (
    field: keyof PatientFormData,
    value: string | number
  ) => {
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
    const newErrors: FormErrors = {};

    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
    if (!formData.email.trim()) newErrors.email = "El email es obligatorio";
    if (!formData.password.trim())
      newErrors.password = "La contraseña es obligatoria";
    if (!formData.fechaNacimiento)
      newErrors.fechaNacimiento = "La fecha de nacimiento es obligatoria";
    if (!formData.genero) newErrors.genero = "El género es obligatorio";
    if (!formData.direccion.trim())
      newErrors.direccion = "La dirección es obligatoria";
    if (!formData.idUsuario || formData.idUsuario <= 0)
      newErrors.idUsuario = "El ID de usuario es obligatorio";

    // Validate email format
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Formato de email inválido";
    }

    // Validate password length
    if (formData.password && formData.password.length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await post(formData);

      // Show success message and reset form
      alert("Paciente agregado exitosamente");
      setFormData({
        email: "",
        password: "",
        nombre: "",
        direccion: "",
        genero: "",
        fechaNacimiento: "",
        idUsuario: 0,
      });
    } catch (error) {
      console.error("Error adding patient:", error);
    }
  };

  const handleCancel = () => {
    if (
      window.confirm(
        "¿Está seguro de que desea cancelar? Se perderán los datos ingresados."
      )
    ) {
      setFormData({
        email: "",
        password: "",
        nombre: "",
        direccion: "",
        genero: "",
        fechaNacimiento: "",
        idUsuario: 0,
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
        {postError && (
          <div className="error-banner">
            <p>Error al crear el paciente. Por favor, intente nuevamente.</p>
          </div>
        )}
        <div className="form-section">
          <form className="patient-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>Nombre *</label>
                <input
                  type="text"
                  className={`form-input ${errors.nombre ? "error" : ""}`}
                  placeholder="Nombre del paciente"
                  value={formData.nombre}
                  onChange={(e) => handleInputChange("nombre", e.target.value)}
                />
                {errors.nombre && (
                  <span className="error-message">{errors.nombre}</span>
                )}
              </div>

              <div className="form-group">
                <label>Cedula (ID)*</label>
                <input
                  type="number"
                  className={`form-input ${errors.idUsuario ? "error" : ""}`}
                  placeholder="12345678"
                  value={formData.idUsuario || ""}
                  onChange={(e) =>
                    handleInputChange(
                      "idUsuario",
                      parseInt(e.target.value) || 0
                    )
                  }
                />
                {errors.idUsuario && (
                  <span className="error-message">{errors.idUsuario}</span>
                )}
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  className={`form-input ${errors.email ? "error" : ""}`}
                  placeholder="paciente@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label>Contraseña *</label>
                <input
                  type="password"
                  className={`form-input ${errors.password ? "error" : ""}`}
                  placeholder="Contraseña"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                />
                {errors.password && (
                  <span className="error-message">{errors.password}</span>
                )}
              </div>

              <div className="form-group">
                <label>Fecha de nacimiento *</label>
                <input
                  type="date"
                  className={`form-input ${errors.fechaNacimiento ? "error" : ""}`}
                  value={formData.fechaNacimiento}
                  onChange={(e) =>
                    handleInputChange("fechaNacimiento", e.target.value)
                  }
                />
                {errors.fechaNacimiento && (
                  <span className="error-message">
                    {errors.fechaNacimiento}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label>Género *</label>
                <select
                  className={`form-select ${errors.genero ? "error" : ""}`}
                  value={formData.genero}
                  onChange={(e) => handleInputChange("genero", e.target.value)}
                >
                  <option value="">Seleccionar género</option>
                  <option value="M">Masculino</option>
                  <option value="F">Femenino</option>
                </select>
                {errors.genero && (
                  <span className="error-message">{errors.genero}</span>
                )}
              </div>

              <div className="form-group full-width">
                <label>Dirección *</label>
                <input
                  type="text"
                  className={`form-input ${errors.direccion ? "error" : ""}`}
                  placeholder="Calle, número, ciudad..."
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
                disabled={postLoading}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="btn-primary"
                disabled={postLoading}
              >
                {postLoading ? "Agregando..." : "Agregar Paciente"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AgregarPacientes;
