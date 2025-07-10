import { useFetch } from "@hooks/useFetch.ts";
import { useMutation } from "@/hooks/useMutation";

export const useGetPatients = () => {
  return useFetch("/patients", "Error al obtener los pacientes");
};

// export const useLoginSuperUser = () => {
//   return useFetch(
//     "/auth/root/login",
//     "Error al hacer login como superusuario"
//   );
// };

export const useLoginSuperUser = () => {
  const post = useMutation();

  return {
    post: (role: string, user: any) =>
      post.mutate(
        "POST",
        `auth/${role}/login`,
        user,
        "Error al hacer login como superusuario"
      ),
    postLoading: post.loading,
    postError: post.error,
  };
};
