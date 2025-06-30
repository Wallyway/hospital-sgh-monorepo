import { Outlet, useLocation } from "react-router-dom";
// components
import LayoutSection from "@components/layout/LayoutSection";
// styles
import "./styles/patient.scss";

const PatientBase = () => {
  const location = useLocation();

  const paciente = {
    nombre: "Pancho Perez",
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    // onSidebarClick manejado por las rutas
  };

  const getTitleRoute = () => {
    const path = location.pathname;
    if (path.includes("agendar")) {
      return "Agendar cita";
    } else if (path.includes("citas-pendientes")) {
      return "Citas pendientes";
    } else if (path.includes("modificar-datos")) {
      return "Modificar datos";
    } else if (path.includes("historial-clinico")) {
      return "Historial clínico";
    }
    return "Inicio Paciente";
  };

  return (
    <div className="patient-base">
      <LayoutSection navProps={paciente}>
        <h1 className="title-section">{getTitleRoute()}</h1>
        {/* El Outlet renderiza los componentes de las rutas hijas del AppRouter*/}
        <Outlet />
      </LayoutSection>
    </div>
  );
};

export default PatientBase;
