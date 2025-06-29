import { useAuth } from "@contexts/AuthContext";
import { useAppForm, validationRules } from "@hooks/useAppForm";
import type { LoginFormData } from "@/types/forms";

export const Login = () => {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useAppForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data.email, data.password);
    } catch (error) {
      // esto se puede cambiar por los errores de la API (serverErrors)
      setError("root", {
        type: "manual",
        message: "Credenciales incorrectas.",
      });
    }
  };

  return (
    <div className="flex align-center justify-center min-h-100vh">
      <div className="login-form">
        <div className="hospital-header">
          <h1>Hospital</h1>
          <p>Sistema de Gestión Hospitalaria</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} >
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

          {/* Error general del formulario */}
          {errors.root && (
            <div className="error-message">{errors.root.message}</div>
          )}
          <button className="btn-login" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Iniciando Sesión..." : "Iniciar Sesión"}
          </button>
        </form>

        <div className="login-help">
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
    </div>
  );
};
