import { useNavigate } from "react-router-dom";
// contexts
import { useAuth } from "@contexts/AuthContext";
// hooks
import { useAppForm, validationRules } from "@hooks/useAppForm";
// types
import type { LoginFormData } from "@/types/forms";
// styles
import "./auth.scss";

export const Login = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();

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
      const userData = await login(data.email, data.password);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (userData) {
        // Redirigir al dashboard o a la página principal
        navigate(`/${userData.role}/dashboard`);
      }
    } catch (error) {
      // esto se puede cambiar por los errores de la API (serverErrors)
      setError("root", {
        type: "manual",
        message: "Credenciales incorrectas.",
      });
    }
  };

  return (
    <div className="auth-container flex align-center justify-center min-h-100vh w-100">
      <form
        className="login-form flex-column align-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="login-header">
          <h1>Inicia Sesion</h1>
          {/* <p>Hospital</p> */}
        </div>
        <div className="form-group flex-column w-100">
          <label htmlFor="email">Correo electrónico</label>
          <input
            // className={errors.email ? "error" : ""}
            className="inp-clean"
            id="email"
            type="email"
            placeholder="usuario@hospital.com"
            {...register("email", validationRules.email)}
          />
          {errors.email && (
            <span className="field-error">{errors.email.message}</span>
          )}
        </div>

        <div className="form-group flex-column w-100">
          <label htmlFor="password">Contraseña</label>
          <input
            // className={errors.password ? "error" : ""}
            className="inp-clean"
            id="password"
            type="password"
            placeholder="••••••••"
            {...register("password", validationRules.password)}
          />
          {errors.password && (
            <span className="field-error">{errors.password.message}</span>
          )}

          {/* <div className="login-help"> */}
          <a className="login-help" href="#">
            ¿Olvidaste tu contraseña?
          </a>
          {/* </div> */}
        </div>

        <div className="form-actions w-100">
          {/* Error general del formulario */}
          {errors.root && (
            <div className="error-message">{errors.root.message}</div>
          )}
          {/* boton de envio */}
          <button className="btn-primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Iniciando Sesión..." : "Iniciar Sesión"}
          </button>
        </div>
      </form>
    </div>
  );
};
