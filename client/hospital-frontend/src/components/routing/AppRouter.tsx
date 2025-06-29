import { Routes, Route, Navigate } from "react-router-dom";
// components
import { MainLayout } from "@components/layout/MainLayout";
import { Login } from "@views/auth/Login";

export const AppRouter = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route
          path="/login"
          element={
            <Login />
          }
        />
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
    </MainLayout>
  );
};
