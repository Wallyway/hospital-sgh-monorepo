// Tipos de usuario y roles del sistema hospitalario
export const UserRole = {
  PADMIN: 'padmin',
  DOCTOR: 'doctor',
  PATIENT: 'patient',
} as const;

export type UserRole = typeof UserRole[keyof typeof UserRole];

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department?: string;
  specialization?: string;
  permissions: string[];
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
