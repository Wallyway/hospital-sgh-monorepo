import { Outlet } from "react-router-dom";
// components
import LayoutSection from "@components/layout/LayoutSection";
// styles
import "./styles/pAdminBase.scss";

const PAdminBase = () => {
  const padmin = {
    nombre: "Admin Principal",
    avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg",
  };

  return (
    <div className="padmin-base">
      <LayoutSection navProps={padmin}>
        {/* El Outlet renderiza los componentes de las rutas hijas del AppRouter*/}
        <Outlet />
      </LayoutSection>
    </div>
  );
};

export default PAdminBase;
