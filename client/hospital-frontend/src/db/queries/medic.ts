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

// listar citas de pacientes
export const useGetPatientAppointments = () => {
  return useFetch("appointments", "Error al obtener las citas del paciente");
};

// consultar medicamentos
export const useGetMedicines = () => {
  return useFetch("appointments/medications", "Error al obtener los medicamentos");
};

// prescribir medicamentos
export const usePrescribeMedicines = () => {
  const post = useMutation();

  return {
    post: (data: any) => {
      const { endpoint, ...restData } = data;
      return post.mutate(
        "POST",
        endpoint,
        restData,
        "Error al prescribir medicamentos"
      );
    },
    postLoading: post.loading,
    postError: post.error,
  };
};

// agregar resumen de cita
export const useAddAppointmentSummary = () => {
  const post = useMutation();

  return {
    post: (appointmentId: string, data: any) =>
      post.mutate(
        "POST",
        `appointments/${appointmentId}/finish`,
        data,
        "Error al agregar el resumen de la cita"
      ),
    postLoading: post.loading,
    postError: post.error,
  };
};