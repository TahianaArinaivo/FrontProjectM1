import { useMutation } from "@tanstack/react-query";
import { User } from "../components/publicUser/types/User";
import { Register } from "../services/UserService";

export const useSignIn = () => {
  const mutation = useMutation({
    mutationFn: (data:any) => Register.post(data),
  });

  return {
    error: mutation.isError,
    isLoading: mutation.isLoading,
    signIn: mutation.mutate,
    isSuccess: mutation.isSuccess,
    data: mutation.data,
  };
};
