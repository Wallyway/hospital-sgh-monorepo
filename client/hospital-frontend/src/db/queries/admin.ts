import { useMutation } from "@hooks/useMutation";
import { useFetch } from "@hooks/useFetch";

// get medics
export const useGetMedics = () => {
  return useFetch("auth/admin/medics", "Error al obtener los médicos");
};
