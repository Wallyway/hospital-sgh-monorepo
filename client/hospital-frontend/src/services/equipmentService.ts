// Servicios para la gestión de equipos médicos
export interface Equipment {
  idEquipamiento: number;
  idDepartamento: number;
  nombre: string;
  estado: "D" | "P"; // D = Disponible, P = Prestado
  FContratacion: string;
}

export interface RequestEquipmentData {
  idEquipamiento: number;
  FPrestamo: string;
  FDevolucion: string;
}

export interface EquipmentRequest {
  id: string;
  nombreEquipo: string;
  fechaPrestamo: string;
  fechaDevolucion: string;
  estado: "P" | "D"; // P = Prestado (en_uso), D = Disponible (devuelto)
  medicoSolicitante: string;
  observaciones?: string;
  fechaSolicitud: string;
}

const API_BASE = '/api';

// Función helper para manejar respuestas de la API
const handleApiResponse = async (response: Response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Error ${response.status}: ${response.statusText}`);
  }
  return response.json();
};

// Función helper para obtener headers autenticados
const getAuthHeaders = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('accesToken')}`,
});

/**
 * Obtiene la lista de todos los equipos médicos
 */
export const getEquipment = async (): Promise<Equipment[]> => {
  const response = await fetch(`${API_BASE}/equipment`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });
  
  return handleApiResponse(response);
};

/**
 * Solicita un equipo médico
 */
export const requestEquipment = async (data: RequestEquipmentData): Promise<any> => {
  const response = await fetch(`${API_BASE}/equipment/request`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });
  
  return handleApiResponse(response);
};

/**
 * Filtra equipos disponibles (estado 'D')
 */
export const getAvailableEquipment = (equipment: Equipment[]): Equipment[] => {
  return equipment.filter(equipo => equipo.estado === 'D');
};

/**
 * Filtra equipos en uso (estado 'P')
 */
export const getEquipmentInUse = (equipment: Equipment[]): Equipment[] => {
  return equipment.filter(equipo => equipo.estado === 'P');
};
