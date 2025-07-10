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
      post.mutate("POST", "appointments", data, "Error al crear la cita"),
    postLoading: post.loading,
    postError: post.error,
  };
};

// citas del paciente
export const useGetPatientAppointments = () => {
  return useFetch("appointments", "Error al obtener las citas del paciente");
};

// cancelar cita
export const useCancelAppointment = () => {
  const del = useMutation();

  return {
    post: (id: string) =>
      del.mutate(
        "DELETE",
        `appointments/${id}`,
        null,
        "Error al cancelar la cita"
      ),
    postLoading: del.loading,
    postError: del.error,
  };
};
