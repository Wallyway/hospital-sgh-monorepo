import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  hasRole: (role: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  department?: string;
  specialization?: string;
  permissions: string[];
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

// Componente proveedor de autenticación
export const AuthProvider = ({ children }: AuthProviderProps) => {
  // datos de autenticación
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  }); 

  // funcion login (se reemplza despues)
  const login = async (email: string, _password: string) => {
    try {
      // Aquí iría tu lógica de autenticación real
      const mockUser: User = {
        id: "1",
        name: "Dr. Juan Pérez",
        email: email,
        // role: 'ADMIN',
        role: 'PATIENT',
        department: "Cardiología",
        specialization: "Cardiólogo",
        permissions: [
          "view_patients",
          "edit_medical_records",
          "prescribe_medication",
        ],
      };

      setAuthState({
        user: mockUser,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  // funcion logout
  const logout = () => {
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  // saber si el usuario tiene un rol específico
  const hasRole = (role: string): boolean => {
    return authState.user?.role === role;
  };

  // Verificar autenticación al cargar la app
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // verficar token en localStorage
        setAuthState((prev) => ({ ...prev, isLoading: false }));
      } catch (error) {
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
      }
    };

    checkAuth();
  }, []);

  // propiedades del contexto de autenticación
  const value: AuthContextType = {
    ...authState,
    login,
    logout,
    hasRole,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook para acceder al contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};