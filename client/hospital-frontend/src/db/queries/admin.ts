import { useMutation } from "@hooks/useMutation";
import { useFetch } from "@hooks/useFetch";

// get medics
export const useGetMedics = () => {
  return useFetch("auth/admin/medics", "Error al obtener los médicos");
};

// get patients
export const useGetPatients = () => {
  return useFetch("auth/admin/patients", "Error al obtener los pacientes");
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

// update patient
export const useUpdatePatient = () => {
  const patch = useMutation();
  return {
    patch: (patient: any, patientId: string) =>
      patch.mutate(
        "PATCH",
        `auth/admin/patients/${patientId}`,
        patient,
        "Error al actualizar el paciente"
      ),
    patchLoading: patch.loading,
    patchError: patch.error,
  };
};
