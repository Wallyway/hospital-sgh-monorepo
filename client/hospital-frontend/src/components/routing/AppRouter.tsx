import { Routes, Route, Navigate } from "react-router-dom";
// components
import { Login } from "@views/auth/Login";
// medic views
import MedicBase from "@/views/medic/MedicBase";
import MedicAgenda from "@views/medic/Agenda.jsx";
// admin views
import PAdminDashboard from "@views/pAdmin/PAdminDashboard";
// patient views
import PatientBase from "@/views/patient/PatientBase.jsx";
import Agendar from "@/views/patient/Agendar.jsx";
import CitasPendientes from "@/views/patient/CitasPendientes.jsx";
import ModificarDatos from "@/views/patient/ModificarDatos.jsx";




// Componentes de secciones del médico (placeholders)
const ConsultarMedicamentos = () => <div>Consultar medicamentos</div>;
const SolicitarEquipos = () => <div>Solicitar equipos</div>;
const ConsultarHC = () => <div>Consultar HC</div>;
const RecetarMedicamentos = () => <div>Recetar medicamentos</div>;
const DescripcionCita = () => <div>Descripción cita</div>;

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />

      {/* Medic routes */}
      <Route path="/medic" element={<MedicBase />} >
        <Route path="agenda" element={<MedicAgenda />} />
        <Route path="medicamentos" element={<ConsultarMedicamentos />} />
        <Route path="equipos" element={<SolicitarEquipos />} />
        <Route path="historiales" element={<ConsultarHC />} />
        <Route path="recetar" element={<RecetarMedicamentos />} />
        <Route path="citas" element={<DescripcionCita />} />
        {/* <Route index element={<MedicAgenda />} /> */}
      </Route>

      {/* Admmin routes */}
      <Route path="/padmin/dashboard" element={<PAdminDashboard />} />

      {/* Patient routes */}
      <Route path="/patient" element={<PatientBase />}>
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
