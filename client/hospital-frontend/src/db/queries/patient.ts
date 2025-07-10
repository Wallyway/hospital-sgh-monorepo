import { useFetch } from "@hooks/useFetch.ts";
import { useMutation } from "@/hooks/useMutation";

// obtner especialidades
export const useGetSpecialties = () => {
  return useFetch(
    "appointments/specialties",
    "Error al obtener las especialidades"
  );
};

// obtener medicos disponibles
export const useGetAvailableMedics = () => {
  return useFetch(
    "appointments/available-medics",
    "Error al obtener los médicos disponibles"
  );
};

// crear cita
export const useCreateAppointment = () => {
  const post = useMutation();

  return {
    post: (data: any) =>
      post.mutate(
        "POST",
        "appointments",
        data,
        "Error al crear la cita"
      ),
    postLoading: post.loading,
    postError: post.error,
  };
};