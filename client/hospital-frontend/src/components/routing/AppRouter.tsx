import { Routes, Route, Navigate } from "react-router-dom";
// components
import { Login } from "@views/auth/Login";
import MedicDashboard from "@views/medic/MedicDashboard";
import PatientDashboard from "@views/patient/PatientDashboard";
import PAdminDashboard from "@views/pAdmin/PAdminDashboard";

// Componentes de secciones del paciente (placeholders)
const Agenda = () => <div>Agenda de citas</div>;
const CitasPendientes = () => <div>Citas pendientes</div>;
const CancelarCitas = () => <div>Cancelar citas</div>;
const ModificarDatos = () => <div>Modificar sus datos</div>;
const HistorialClinico = () => <div>Ver historial clínico</div>;

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/medic/dashboard" element={<MedicDashboard />} />
      <Route path="/padmin/dashboard" element={<PAdminDashboard />} />
      <Route path="/patient/dashboard" element={<PatientDashboard />}>
        <Route path="agenda" element={<Agenda />} />
        <Route path="citas-pendientes" element={<CitasPendientes />} />
        <Route path="cancelar-citas" element={<CancelarCitas />} />
        <Route path="modificar-datos" element={<ModificarDatos />} />
        <Route path="historial-clinico" element={<HistorialClinico />} />
        <Route index element={<Agenda />} />
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
