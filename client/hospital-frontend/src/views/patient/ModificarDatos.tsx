import React, { useState, useRef, useEffect } from "react";
import "./styles/modificarDatos.scss";

const initialData = {
  nombre: "Juan Pérez",
  idPaciente: "PA-0981",
  fechaNacimiento: "1989-04-15",
  fechaAfiliacion: "2024-01-05",
  direccion: "Av. Siempre Viva 123",
  email: "juan.perez@example.com",
  genero: "Masculino",
  telefono: "+34 600 123 456",
};

const emailRegex = /^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/;

const countryOptions = [
  { code: "+57", name: "Colombia", flag: "🇨🇴" },
  { code: "+34", name: "España", flag: "🇪🇸" },
  { code: "+52", name: "México", flag: "🇲🇽" },
  { code: "+1", name: "Estados Unidos", flag: "🇺🇸" },
  { code: "+51", name: "Perú", flag: "🇵🇪" },
];

type CountryOption = typeof countryOptions[0];

function countDigits(str: string) {
  return (str.match(/\d/g) || []).length;
}

function splitTelefono(telefono: string) {
  // Extrae el código y el número del teléfono inicial
  const match = telefono.match(/^(\+\d{1,3})\s*(.*)$/);
  if (match) {
    return { code: match[1], number: (match[2] || "").replace(/\D/g, "") };
  }
  return { code: "+57", number: telefono.replace(/\D/g, "") };
}

// CountryCodeDropdown personalizado
interface CountryCodeDropdownProps {
  value: string;
  onChange: (code: string) => void;
}
const CountryCodeDropdown: React.FC<CountryCodeDropdownProps> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = countryOptions.find((c) => c.code === value) || countryOptions[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="country-dropdown" ref={ref} tabIndex={0}>
      <button
        type="button"
        className="country-dropdown-btn"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {selected.code}
        <span className="dropdown-arrow" style={{ marginLeft: 6 }}>▼</span>
      </button>
      {open && (
        <ul className="country-dropdown-list" role="listbox">
          {countryOptions.map((c) => (
            <li
              key={c.code}
              className="country-dropdown-item"
              role="option"
              aria-selected={c.code === value}
              onClick={() => {
                onChange(c.code);
                setOpen(false);
              }}
              tabIndex={0}
            >
              <span style={{ marginRight: 8 }}>{c.flag}</span>
              {c.name} <span style={{ color: "#2563eb", marginLeft: 4 }}>({c.code})</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const ModificarDatos: React.FC = () => {
  const telParts = splitTelefono(initialData.telefono);
  const [form, setForm] = useState({
    direccion: initialData.direccion,
    email: initialData.email,
    telefonoCode: telParts.code,
    telefonoNumber: telParts.number,
  });
  const [errors, setErrors] = useState<{ email: string; telefonoNumber: string }>({ email: "", telefonoNumber: "" });

  const validate = (name: string, value: string) => {
    if (name === "email") {
      if (!emailRegex.test(value)) {
        return "Correo electrónico inválido";
      }
    }
    if (name === "telefonoNumber") {
      if (countDigits(value) < 10) {
        return "El teléfono debe tener al menos 10 números";
      }
    }
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "telefonoNumber") {
      // Solo permitir números
      const onlyNums = value.replace(/\D/g, "");
      setForm({ ...form, [name]: onlyNums });
      setErrors({ ...errors, [name]: validate(name, onlyNums) });
    } else {
      setForm({ ...form, [name]: value });
      setErrors({ ...errors, [name]: validate(name, value) });
    }
  };

  const handleCountryChange = (code: string) => {
    setForm({ ...form, telefonoCode: code });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validación final antes de enviar
    const emailError = validate("email", form.email);
    const telError = validate("telefonoNumber", form.telefonoNumber);
    setErrors({ email: emailError, telefonoNumber: telError });
    if (emailError || telError) return;
    // Aquí iría la lógica para guardar los cambios
    const telefonoCompleto = `${form.telefonoCode} ${form.telefonoNumber}`;
    alert(
      "Datos actualizados:\n" +
        JSON.stringify(
          { ...form, telefono: telefonoCompleto },
          null,
          2
        )
    );
  };

  const isDisabled =
    !!errors.email ||
    !!errors.telefonoNumber ||
    !form.email ||
    !form.telefonoNumber;

  return (
    <div className="modificar-datos-container">
      <h2 className="modificar-datos-title">Modificar Datos</h2>
      <form className="modificar-datos-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" value={initialData.nombre} disabled />
          </div>
          <div className="form-group">
            <label>ID paciente</label>
            <input type="text" value={initialData.idPaciente} disabled />
          </div>
          <div className="form-group">
            <label>Fecha de nacimiento</label>
            <input type="date" value={initialData.fechaNacimiento} disabled />
          </div>
          <div className="form-group">
            <label>Fecha de afiliación</label>
            <input type="date" value={initialData.fechaAfiliacion} disabled />
          </div>
          <div className="form-group">
            <label>Dirección</label>
            <input
              type="text"
              name="direccion"
              value={form.direccion}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>Género</label>
            <input type="text" value={initialData.genero} disabled />
          </div>
          <div className="form-group">
            <label>Teléfono</label>
            <div style={{ display: "flex", gap: "0.5em", alignItems: "center" }}>
              <CountryCodeDropdown
                value={form.telefonoCode}
                onChange={handleCountryChange}
              />
              <input
                type="text"
                name="telefonoNumber"
                value={form.telefonoNumber}
                onChange={handleChange}
                className={errors.telefonoNumber ? "input-error" : ""}
                maxLength={15}
                placeholder="Número"
                style={{ flex: 1 }}
              />
            </div>
            {errors.telefonoNumber && (
              <span className="error-message">{errors.telefonoNumber}</span>
            )}
          </div>
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-guardar" disabled={isDisabled}>
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModificarDatos;