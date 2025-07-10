import { useEffect, useState } from "react";
// contexts
import { useAuth } from "@contexts/AuthContext";
// queries
import { useGetMedics } from "@db/queries/admin";
// styles
import "./styles/consultarMedicos.scss";

interface Medico {
  idUsuario: string;
  nombre: string;
  email: string;
  genero: 'M' | 'F';
  direccion: string;
  fechaNacimiento: string;
  createdAt: string;
  updatedAt: string;
}

const ConsultarMedicos = () => {
  const { medics } = useConsultarMedicos();

  const formatUTCDate = (dateString: string) => {
    const date = new Date(dateString);
    // Usar getUTC methods para evitar problemas de zona horaria
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="main-content-section consultar-medicos-container">
      <div className="medicos-header">
        <div>
          <h2>Consultar Médicos</h2>
        </div>
      </div>

      <div className="medicos-content">
        <div className="search-section">
          <input
            type="text"
            placeholder="Buscar médico por nombre, especialidad..."
            className="search-input"
          />
          <button className="search-btn">Buscar</button>
        </div>

        <div className="medicos-list">
          {medics.length > 0 ? (
            medics.map((medico) => (
              <div key={medico.idUsuario} className="medico-card">
                <div className="medico-info">
                  <h3>Dr. {medico.nombre}</h3>
                  <p className="email">{medico.email}</p>
                  <p className="id-usuario">ID Usuario: {medico.idUsuario}</p>
                  <p className="genero">Género: {medico.genero === 'M' ? 'Masculino' : 'Femenino'}</p>
                  <p className="direccion">{medico.direccion}</p>
                  <p className="fecha-nacimiento">
                    F. Nacimiento: {formatUTCDate(medico.fechaNacimiento)}
                  </p>
                </div>
                <div className="medico-actions">
                  <button className="btn-action primary">Ver agenda</button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-medicos">
              <p>No se encontraron médicos disponibles.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultarMedicos;

const useConsultarMedicos = () => {
  const { fetchData: getMedics } = useGetMedics();
  const { isAuthenticated } = useAuth();

  const [medics, setMedics] = useState<Medico[]>([]);

  useEffect(() => {
    const fetchMedics = async () => {
      if (!isAuthenticated) return;

      const medicsData = await getMedics();
      if (medicsData?.fetchError) return;

      if (medicsData && medicsData.length > 0) {
        setMedics(medicsData);
      }
    };
    fetchMedics();
  }, [isAuthenticated]);

  return {
    medics,
  };
};
