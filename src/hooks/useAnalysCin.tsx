import { useMutation } from "@tanstack/react-query";
import CinService from "../services/CinService";
import { CIN } from "../components/publicUser/Register/CinAnalysResult";
import { User } from "../components/publicUser/types/User";

export const useAnalysCin = () => {
  const mutation = useMutation({
    mutationFn: (cin: File) => CinService.post(cin),
  });

  return {
    error: mutation.isError,
    isLoading: mutation.isLoading,
    analysCinMutate: mutation.mutate,
    isSuccess: mutation.isSuccess,
    data: mutation.data,
  };
};
