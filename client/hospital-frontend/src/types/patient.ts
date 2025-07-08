// Patient-related types and interfaces
export interface Patient {
  id: string;
  nombre: string;
  apellidos?: string;
  email: string;
  dni: string;
  telefono: string;
  fechaNacimiento?: string;
  edad?: number;
  genero?: string;
  direccion?: string;
  seguroMedico: 'publico' | 'privado' | 'mutua';
  numeroSeguro?: string;
  ultimaVisita: string;
  alergias?: string[];
  observacionesMedicas?: string;
  fechaRegistro?: string;
}

export interface PatientFormData {
  nombre: string;
  apellidos: string;
  dni: string;
  fechaNacimiento: string;
  telefono: string;
  email: string;
  direccion: string;
  seguroMedico: 'publico' | 'privado' | 'mutua' | '';
  numeroSeguro: string;
  alergias: string;
  observacionesMedicas: string;
}

export interface Appointment {
  id: string;
  pacienteNombre: string;
  pacienteId: string;
  fecha: string;
  hora: string;
  medico: string;
  especialidad: string;
  motivo: string;
  estado: 'pendiente' | 'confirmada' | 'cancelada' | 'completada';
}

// Mock data for development
export const mockPatients: Patient[] = [
  {
    id: "PAT001",
    nombre: "Juan Martínez López",
    email: "juan.martinez@email.com",
    dni: "12345678A",
    telefono: "+34 123 456 789",
    seguroMedico: "publico",
    ultimaVisita: "15/01/2024",
    edad: 45,
    direccion: "Calle Mayor 123, Madrid",
    alergias: ["Penicilina"]
  },
  {
    id: "PAT002",
    nombre: "Ana López García",
    email: "ana.lopez@email.com",
    dni: "87654321B",
    telefono: "+34 987 654 321",
    seguroMedico: "privado",
    ultimaVisita: "12/01/2024",
    edad: 32,
    direccion: "Avenida Libertad 45, Barcelona",
    alergias: ["Frutos secos", "Lactosa"]
  },
  {
    id: "PAT003",
    nombre: "Carlos Rodríguez Pérez",
    email: "carlos.rodriguez@email.com",
    dni: "11223344C",
    telefono: "+34 111 222 333",
    seguroMedico: "mutua",
    ultimaVisita: "10/01/2024",
    edad: 58,
    direccion: "Plaza España 7, Valencia",
    alergias: []
  },
  {
    id: "PAT004",
    nombre: "María González López",
    email: "maria.gonzalez@email.com",
    dni: "55667788D",
    telefono: "+34 555 666 777",
    seguroMedico: "publico",
    ultimaVisita: "08/01/2024",
    edad: 29,
    direccion: "Calle Sol 89, Sevilla",
    alergias: ["Aspirina"]
  },
  {
    id: "PAT005",
    nombre: "Pedro Sánchez Ruiz",
    email: "pedro.sanchez@email.com",
    dni: "99887766E",
    telefono: "+34 999 888 777",
    seguroMedico: "privado",
    ultimaVisita: "05/01/2024",
    edad: 41,
    direccion: "Avenida Central 156, Bilbao",
    alergias: ["Polen"]
  },
  {
    id: "PAT006",
    nombre: "Laura Fernández Castro",
    email: "laura.fernandez@email.com",
    dni: "22334455F",
    telefono: "+34 222 333 444",
    seguroMedico: "mutua",
    ultimaVisita: "03/01/2024",
    edad: 37,
    direccion: "Calle Nueva 23, Zaragoza",
    alergias: ["Mariscos"]
  }
];

export const mockAppointments: Appointment[] = [
  {
    id: "APT001",
    pacienteNombre: "Juan Martínez López",
    pacienteId: "PAT001",
    fecha: "15/01/2024",
    hora: "09:00",
    medico: "Dr. Juan Pérez",
    especialidad: "Cardiología",
    motivo: "Consulta de seguimiento para revisión de resultados de electrocardiograma",
    estado: "pendiente"
  },
  {
    id: "APT002",
    pacienteNombre: "Ana López García",
    pacienteId: "PAT002",
    fecha: "16/01/2024",
    hora: "14:30",
    medico: "Dra. María García",
    especialidad: "Pediatría",
    motivo: "Revisión general y control de crecimiento infantil",
    estado: "pendiente"
  },
  {
    id: "APT003",
    pacienteNombre: "Carlos Rodríguez Pérez",
    pacienteId: "PAT003",
    fecha: "17/01/2024",
    hora: "10:15",
    medico: "Dr. Luis Fernández",
    especialidad: "Traumatología",
    motivo: "Consulta por dolor en rodilla izquierda tras actividad deportiva",
    estado: "confirmada"
  },
  {
    id: "APT004",
    pacienteNombre: "María González López",
    pacienteId: "PAT004",
    fecha: "18/01/2024",
    hora: "11:45",
    medico: "Dra. Carmen Ruiz",
    especialidad: "Ginecología",
    motivo: "Control prenatal rutinario - semana 28 de embarazo",
    estado: "pendiente"
  },
  {
    id: "APT005",
    pacienteNombre: "Pedro Sánchez Ruiz",
    pacienteId: "PAT005",
    fecha: "19/01/2024",
    hora: "08:30",
    medico: "Dr. Antonio Morales",
    especialidad: "Endocrinología",
    motivo: "Seguimiento de diabetes tipo 2 y ajuste de medicación",
    estado: "pendiente"
  },
  {
    id: "APT006",
    pacienteNombre: "Laura Fernández Castro",
    pacienteId: "PAT006",
    fecha: "20/01/2024",
    hora: "16:00",
    medico: "Dr. Miguel Torres",
    especialidad: "Dermatología",
    motivo: "Revisión de lunares y evaluación dermatológica preventiva",
    estado: "confirmada"
  }
];
