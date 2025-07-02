import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { User, AuthState } from "@/types/user";
import { UserRole } from "@/types/user";

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<User>;
  logout: () => void;
  hasRole: (role: string) => boolean;
  hasPermission: (permission: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

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
        role: UserRole.PATIENT, // Usar el enum correcto
        department: "Cardiología",
        specialization: "Cardiólogo",
        permissions: [
          "view_patients",
          "edit_medical_records",
          "prescribe_medication",
          "manage_users",
        ],
      };

      setAuthState({
        user: mockUser,
        isAuthenticated: true,
        isLoading: false,
      });

      return mockUser;
    } catch (error) {
      console.error("Login error:", error);
      throw new Error("Login failed");
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

  // verificar si el usuario tiene un permiso específico
  const hasPermission = (permission: string): boolean => {
    return authState.user?.permissions?.includes(permission) || false;
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
    hasPermission,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
