import { useState, useCallback } from "react";
import { useAuth } from "@contexts/AuthContext";

interface UseFetchOptions {
  headers?: Record<string, string>;
  method?: string;
  body?: any;
}

interface UseFetchReturn {
  fetchData: (newUrl?: string) => Promise<any>;
  loading: boolean;
  error: string | null;
}

// -- en caso de agregar options, se usa useMemo
// const options = useMemo(() => ({
//   headers: { 'X-Custom': 'abc' }
// }), []);
export const useFetch = (
  baseUrl: string = "",
  errorMessage?: string,
  verifyAuth: boolean = true,
  options: UseFetchOptions = {}
): UseFetchReturn => {
  // Estados que se muestran al usuario
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

//   const { isAuthenticated } = useAuth();

  // No hace fetch hasta que se llame a fetchData directamente
  const fetchData = useCallback(
    async (newUrl: string = "") => {
    //   if (verifyAuth && !isAuthenticated) return;

      setLoading(true);
      setError(null);

      const finalUrl = `${newUrl || baseUrl}`;
      // const finalUrl = `${apiBase}${newUrl || baseUrl}`;
      try {
        const response = await fetch(finalUrl, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            ...options.headers,
          },
          ...options,
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || `HTTP error ${response.status}`);
        }
        return result;
      } catch (err: any) {
        const fullError = `${errorMessage}: ${
          err.message || "Error en el fetch"
        }`;
        console.error(fullError); // desarrollador

        setError("Ha ocurrido un error"); // usuario
        return { fetchError: true }; // para el codigo
      } finally {
        setLoading(false);
      }
    },
    [baseUrl, verifyAuth, errorMessage, options]
  );

  return { fetchData, loading, error };
};
