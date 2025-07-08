import React, { useState } from "react";
import "./auth.scss";
import { useNavigate } from "react-router-dom";

const departamentos = [
  "Cardiología",
  "Oncología",
  "Pediatría",
  "Urgencias",
  "Radiología",
];

const loginTypes = ["medico", "paciente", "admin"] as const;
type LoginType = (typeof loginTypes)[number];

const loginTitles: Record<LoginType, string> = {
  medico: "Médico",
  paciente: "Paciente",
  admin: "pAdmin",
};

const initialForm = {
  usuario: "",
  password: "",
  departamento: departamentos[0],
};

// Iconos SVG simples para cada tipo de login
const loginIcons: Record<LoginType, React.ReactNode> = {
  paciente: (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="19" cy="19" r="19" fill="#6366f1" />
      <circle cx="19" cy="15" r="7" fill="#fff" />
      <ellipse cx="19" cy="28" rx="10" ry="5" fill="#fff" />
    </svg>
  ),
  medico: (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="19" cy="19" r="19" fill="#2563eb" />
      <rect x="13" y="24" width="12" height="6" rx="3" fill="#fff" />
      <circle cx="19" cy="15" r="7" fill="#fff" />
      <rect x="17" y="26" width="4" height="8" rx="2" fill="#2563eb" />
    </svg>
  ),
  admin: (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="19" cy="19" r="19" fill="#f59e42" />
      <rect x="11" y="25" width="16" height="6" rx="3" fill="#fff" />
      <circle cx="19" cy="15" r="7" fill="#fff" />
      <rect x="17" y="27" width="4" height="7" rx="2" fill="#f59e42" />
      <rect x="15" y="30" width="8" height="2" rx="1" fill="#f59e42" />
    </svg>
  ),
};

// Validación de email simple
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const MultiLogin: React.FC = () => {
  const [active, setActive] = useState<LoginType>("paciente");
  const [forms, setForms] = useState({
    medico: { ...initialForm },
    paciente: { usuario: "", password: "" },
    admin: { ...initialForm },
  });
  const navigate = useNavigate();
  const [emailErrors, setEmailErrors] = useState({
    medico: "",
    paciente: "",
    admin: "",
  });

  const handleInput = (type: LoginType, field: string, value: string) => {
    setForms((prev) => ({
      ...prev,
      [type]: { ...prev[type], [field]: value },
    }));
    // Validación de email
    if (field === "usuario") {
      setEmailErrors((prev) => ({
        ...prev,
        [type]:
          value && !emailRegex.test(value) ? "Correo electrónico inválido" : "",
      }));
    }
  };

  const handleLogin = (e: React.FormEvent, type: LoginType) => {
    e.preventDefault();
    // Validación de email antes de enviar
    if (!forms[type].usuario || !emailRegex.test(forms[type].usuario)) {
      setEmailErrors((prev) => ({
        ...prev,
        [type]: "Correo electrónico inválido",
      }));
      return;
    }
    alert(`Login ${type}: ${JSON.stringify(forms[type])}`);
  };

  const getClass = (type: LoginType) => {
    if (type === active) return "login-card active";
    if (
      (active === "paciente" && type === "medico") ||
      (active === "admin" && type === "paciente")
    )
      return "login-card left";
    if (
      (active === "paciente" && type === "admin") ||
      (active === "medico" && type === "paciente")
    )
      return "login-card right";
    return "login-card hidden";
  };

  const next = () => {
    setActive((prev) => {
      const idx = loginTypes.indexOf(prev);
      return loginTypes[(idx + 1) % loginTypes.length];
    });
  };
  const prev = () => {
    setActive((prev) => {
      const idx = loginTypes.indexOf(prev);
      return loginTypes[(idx - 1 + loginTypes.length) % loginTypes.length];
    });
  };

  return (
    <div>
      <div className="multi-login-bg">
        <div
          className="superuser-link"
          onClick={() => navigate("/login-superuser")}
        >
          <span>¿Eres Superuser?</span>
          <span className="superuser-arrow">&#8594;</span>
        </div>
        <div className="multi-login-container">
          <button className="arrow left-arrow" onClick={prev}>
            &#x25C0;
          </button>
          {loginTypes.map((type) => (
            <form
              key={type}
              className={getClass(type)}
              onSubmit={(e) => handleLogin(e, type)}
              style={{ pointerEvents: active === type ? "auto" : "none" }}
            >
              <div className="login-icon">{loginIcons[type]}</div>
              <h2>{loginTitles[type]}</h2>
              <label>Correo electrónico</label>
              <input
                type="email"
                value={forms[type].usuario}
                onChange={(e) => handleInput(type, "usuario", e.target.value)}
                placeholder="usuario@hospital.com"
                required
                autoComplete="username"
              />
              {emailErrors[type] && (
                <span className="field-error">{emailErrors[type]}</span>
              )}
              <label>Contraseña</label>
              <input
                type="password"
                value={forms[type].password}
                onChange={(e) => handleInput(type, "password", e.target.value)}
                placeholder="••••••••"
                required
                autoComplete="current-password"
              />
              {(type === "medico" || type === "admin") && (
                <>
                  <label>Departamento</label>
                  <select
                    value={forms[type].departamento}
                    onChange={(e) =>
                      handleInput(type, "departamento", e.target.value)
                    }
                  >
                    {departamentos.map((dep) => (
                      <option key={dep} value={dep}>
                        {dep}
                      </option>
                    ))}
                  </select>
                </>
              )}
              <button type="submit" className="login-btn">
                Ingresar
              </button>
            </form>
          ))}
          <button className="arrow right-arrow" onClick={next}>
            &#x25B6;
          </button>
        </div>
      </div>
    </div>
  );
};
