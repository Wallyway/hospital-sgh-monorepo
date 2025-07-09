import { useMutation } from "@hooks/useMutation";
import { useFetch } from "@hooks/useFetch";

// get medics
export const useGetMedics = () => {
  return useFetch("auth/admin/medics", "Error al obtener los médicos");
};

// create patient
export const useCreatePatient = () => {
  const post = useMutation();

  return {
    post: (patient: any) =>
      post.mutate(
        "POST",
        "auth/admin/create-patient",
        patient,
        "Error al crear el paciente"
      ),
    postLoading: post.loading,
    postError: post.error,
  };
};