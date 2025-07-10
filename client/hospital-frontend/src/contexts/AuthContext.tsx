import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { AuthState } from "@/types/user";

interface AuthContextType extends AuthState {
  login: (email: string, password: string, role: string) => Promise<Boolean>;
  logout: () => void;
  hasRole: (role: string) => boolean;
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
  const login = async (email: string, _password: string, role: string) => {
    try {
      const response = await fetch(`/api/auth/${role}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password: _password }),
      });

      const result = await response.json();

      if (!response.ok || !result.accessToken) {
        throw new Error(`Login failed: ${result.message || "Unknown error"}`);
      }

      // Guardar token en localStorage
      localStorage.setItem("accesToken", result.accessToken);

      // peticion para validar token

      setAuthState({
        user: {
          id: "1",
          name: `nombre de ${role}`,
          email: email,
          role: role,
        },
        isAuthenticated: true,
        isLoading: false,
      });

      return true;
    } catch (error: any) {
      console.error("Login error:", error.message);

      localStorage.removeItem("accesToken");
      setAuthState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });
      return false;
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
        setAuthState((prev) => ({ ...prev, isLoading: true }));
        // verficar token en localStorage
        const token = localStorage.getItem("accesToken");
        if (!token) {
          setAuthState({
            user: null,
            isAuthenticated: false,
            isLoading: false,
          });
          return;
        } else {
          setAuthState({
            user: {
              id: "1",
              name: `nombre de pepe`,
              email: "a@a.com",
              role: "pepe",
            },
            isAuthenticated: true,
            isLoading: false,
          });
        }
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
