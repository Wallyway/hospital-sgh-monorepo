import { Routes, Route, Navigate } from "react-router-dom";
// components
import { Login } from "@views/auth/Login";
// medic views
import MedicBase from "@/views/medic/MedicBase";
import MedicAgenda from "@views/medic/Agenda.jsx";
import PatientAppoinment from "@/views/medic/PatientAppoinment";
import MedicalRecord from "@/views/medic/MedicalRecord";
import RequestEquipment from "@/views/medic/RequestEquipment";
// admin views
import PAdminDashboard from "@views/pAdmin/PAdminDashboard";
// patient views
import PatientBase from "@/views/patient/PatientBase.jsx";
import Agendar from "@/views/patient/Agendar.jsx";
import CitasPendientes from "@/views/patient/CitasPendientes.jsx";
import ModificarDatos from "@/views/patient/ModificarDatos.jsx";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />

      {/* Medic routes */}
      <Route path="/medic" element={<MedicBase />}>
        <Route index element={<Navigate to="/medic/agenda" replace />} />
        <Route path="agenda" element={<MedicAgenda />} />
        <Route path="cita_paciente" element={<PatientAppoinment />} />
        <Route path="ver-hc" element={<MedicalRecord />} />
        <Route path="equipos" element={<RequestEquipment />} />
      </Route>

      {/* Admmin routes */}
      <Route path="/padmin/dashboard" element={<PAdminDashboard />} />

      {/* Patient routes */}
      <Route path="/patient" element={<PatientBase />}>
        <Route index element={<Navigate to="/patient/agendar" replace />} />
        <Route path="agendar" element={<Agendar />} />
        <Route path="citas-pendientes" element={<CitasPendientes />} />
        <Route path="modificar-datos" element={<ModificarDatos />} />
        {/* <Route index element={<Agendar />} /> */}
      </Route>

      <Route
        path="*"
        element={
          <div className="flex-column align-center justify-center">
            <h1>404</h1>
            <p>Página no encontrada</p>
          </div>
        }
      />
    </Routes>
  );
};
