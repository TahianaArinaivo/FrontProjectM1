import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { DemandeService } from "../services/DemandeService";
import Demande from "../components/publicUser/types/Demande";

export const useGetDemande = () => {
  const userQuery = useQuery({
    queryKey: ["get_demande"],
    queryFn: () => DemandeService.get(),
  });
  return {
    data: userQuery.data,
    error: userQuery.isError,
    isLoading: userQuery.isLoading,
    isSuccess: userQuery.isSuccess,
  };
};

export const usePostDemande = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: Demande) => DemandeService.post(data),
    onSuccess: () => queryClient.invalidateQueries(["get_demande"]),
  });

  return {
    error: mutation.isError,
    isLoading: mutation.isLoading,
    requestDemande: mutation.mutate,
    isSuccess: mutation.isSuccess,
    data: mutation.data,
  };
};
