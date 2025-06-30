import { Outlet, useLocation } from "react-router-dom";
// components
import LayoutSection from "@components/layout/LayoutSection";
// styles
import "./styles/medic.scss";

const MedicBase = () => {
  const location = useLocation();
  
  const medico = {
    nombre: "Dr. Juan Pérez",
    avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
  };

  const getTitleRoute = () => {
    const path = location.pathname;
    if (path.includes("agenda")) {
      return "Agenda";
    } else if (path.includes("medicamentos")) {
      return "Consultar medicamentos";
    } else if (path.includes("equipos")) {
      return "Solicitar equipos";
    } else if (path.includes("historiales")) {
      return "Consultar HC";
    } else if (path.includes("recetar")) {
      return "Recetar medicamentos";
    } else if (path.includes("citas")) {
      return "Descripción cita";
    }
    return "Inicio Médico";
  };

  return (
    <div className="medic-base">
      <LayoutSection navProps={medico}>
        <h1 className="title-section">{getTitleRoute()}</h1>
        <Outlet />
      </LayoutSection>
    </div>
  );
};

export default MedicBase;
