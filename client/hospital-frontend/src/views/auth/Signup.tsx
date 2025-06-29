import { useAppForm, validationRules } from "@hooks/useAppForm";
import type { RegisterFormData } from "@/types/forms";

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useAppForm<RegisterFormData>();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      console.log("Datos de registro:", data);
    } catch (error) {
      console.error("Error en registro:", error);
      setError("root", {
        type: "manual",
        message: "Error al crear la cuenta. Intenta nuevamente.",
      });
    }
  };

  return (
    <div className="flex align-center justify-center min-h-100vh">
      <div className="login-form">
        <div className="hospital-header">
          <h1>Crear Cuenta</h1>
          <p>Sistema de Gestión Hospitalaria</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">Nombre completo</label>
            <input
              className={errors.name ? "error" : ""}
              id="name"
              type="text"
              placeholder="Juan Pérez"
              {...register("name", validationRules.name)}
            />
            {errors.name && (
              <span className="field-error">{errors.name.message}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              className={errors.email ? "error" : ""}
              id="email"
              type="email"
              placeholder="usuario@hospital.com"
              {...register("email", validationRules.email)}
            />
            {errors.email && (
              <span className="field-error">{errors.email.message}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="role">Rol</label>
            <select
              className={errors.role ? "error" : ""}
              id="role"
              {...register("role", { required: "Selecciona un rol" })}
            >
              <option value="">Selecciona un rol</option>
              <option value="doctor">Doctor</option>
              <option value="nurse">Enfermera</option>
              <option value="admin">Administrador</option>
              <option value="patient">Paciente</option>
            </select>
            {errors.role && (
              <span className="field-error">{errors.role.message}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              className={errors.password ? "error" : ""}
              id="password"
              type="password"
              placeholder="••••••••"
              {...register("password", validationRules.password)}
            />
            {errors.password && (
              <span className="field-error">{errors.password.message}</span>
            )}
          </div>

          {errors.root && (
            <div className="error-message">{errors.root.message}</div>
          )}
          <button type="submit" className="btn-login" disabled={isSubmitting}>
            {isSubmitting ? "Creando cuenta..." : "Crear Cuenta"}
          </button>
        </form>
      </div>
    </div>
  );
};
