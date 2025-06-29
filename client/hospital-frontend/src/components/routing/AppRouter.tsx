import { Routes, Route, Navigate } from "react-router-dom";
// components
import { Login } from "@views/auth/Login";
import MedicDashboard from "@views/medic/MedicDashboard";
import PatientDashboard from "@views/patient/PatientDashboard";
import PAdminDashboard from "@views/pAdmin/PAdminDashboard";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/medic/dashboard" element={<MedicDashboard />} />
      <Route path="/patient/dashboard" element={<PatientDashboard />} />
      <Route path="/padmin/dashboard" element={<PAdminDashboard />} />
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
