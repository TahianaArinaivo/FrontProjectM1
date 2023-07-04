import { useMutation } from "@tanstack/react-query";
import CinService from "../services/CinService";


export const useAnalysCin = () => {
  const mutation = useMutation({
    mutationFn: (cin: File) => CinService.postCin(cin),
  });

  return {
    error: mutation.isError,
    isLoading: mutation.isLoading,
    analysCinMutate: mutation.mutate,
    isSuccess: mutation.isSuccess,
    data: mutation.data,
  };
};
