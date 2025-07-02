import { Outlet } from "react-router-dom";
// components
import LayoutSection from "@components/layout/LayoutSection";
// styles
import "./styles/medic.scss";

const MedicBase = () => {
  const medico = {
    nombre: "Dr. Juan Pérez",
    avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
  };

  return (
    <div className="medic-base">
      <LayoutSection navProps={medico}>
        <Outlet />
      </LayoutSection>
    </div>
  );
};

export default MedicBase;
