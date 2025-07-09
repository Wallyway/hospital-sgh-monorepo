import { useMutation } from "@/hooks/useMutation";
import { useFetch } from "@/hooks/useFetch";

// listar equipos
export const useGetEquipments = () => {
  return useFetch("equipment", "Error al obtener los equipos");
};

// solicitar equipo
export const useRequestEquipment = () => {
  const post = useMutation();

  return {
    post: (data: any) =>
      post.mutate(
        "POST",
        "equipment/request",
        data,
        "Error al solicitar el equipo"
      ),
    postLoading: post.loading,
    postError: post.error,
  };
};