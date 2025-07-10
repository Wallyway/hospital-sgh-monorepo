// Tipos de usuario y roles del sistema hospitalario
export const UserRole = {
  ADMIN: 'admin',
  MEDIC: 'medic',
  PATIENT: 'patient',
} as const;

export type UserRole = typeof UserRole[keyof typeof UserRole];

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  department?: string;
  specialization?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
