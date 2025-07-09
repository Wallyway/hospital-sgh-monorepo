import { useState } from "react";
import { useAuth } from "@contexts/AuthContext";

interface MutationOptions {
  headers?: Record<string, string>;
}

interface ApiResponse {
  error?: string;
  errors?: string;
  [key: string]: any;
}

interface MutationResult {
  errorMutationMsg?: string;
  errorJsonMsg?: string;
  [key: string]: any;
}

interface UseMutationReturn {
  mutate: (
    method: string,
    endpoint: string,
    body?: any,
    errorMessage?: string,
    options?: MutationOptions
  ) => Promise<ApiResponse | MutationResult>;
  loading: boolean;
  error: string | null;
}

export const useMutation = (): UseMutationReturn => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { isAuthenticated } = useAuth();

  const mutate = async (
    method: string,
    endpoint: string,
    body: any = null,
    errorMessage?: string,
    options: MutationOptions = {}
  ): Promise<ApiResponse | MutationResult> => {
    // if (!isAuthenticated && endpoint) return {};

    setLoading(true);
    setError(null);

    try {
      const isFormData = body instanceof FormData;

      const response = await fetch(`/api/${endpoint}`, {
        method,
        headers: {
          ...(isFormData ? {} : { "Content-Type": "application/json" }),
          authorization: `Bearer ${localStorage.getItem("accesToken")}`,
          ...options.headers,
        },
        body: body ? (isFormData ? body : JSON.stringify(body)) : null,
      });

      let result: ApiResponse = {};
      try {
        result = await response.json();
      } catch (jsonError: any) {
        // JSON vacio
        throw new Error(
          `(Sin JSON) No se pudo parsear la respuesta: ${jsonError.message}`
        );
      }

      if (!response.ok) {
        throw new Error(result.message || "Error desconocido");
      }
      return result;
    } catch (err: any) {
      setError("Ha ocurrido un error"); // usuario
      console.error(`${errorMessage}: ${err.message}`); // desarrollador
      return {
        errorMutationMsg: errorMessage || "Hubo un error", // para el codigo
        errorJsonMsg: err.message, // especifico del backend
      };
    } finally {
      setLoading(false);
    }
  };

  return { mutate, loading, error };
};
