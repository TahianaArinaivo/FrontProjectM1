import { useMutation, useQuery } from "@tanstack/react-query"
import { DeleteCasier, GetCasier, PostCasier, PutCasier } from "../services/CasierService"

export const useGetCasier =  () => {
    const getCasierQuery = useQuery({queryKey:["get_casier"], queryFn:() => GetCasier.get()})
    return {
      isLoading: getCasierQuery.isLoading,
      error: getCasierQuery.isError,
      data: getCasierQuery.data
    }
};

export const usePostCasier = () => {
    const mutation = useMutation({
        mutationFn: (data:any) => PostCasier.post(data),
      });
    
      return {
        error: mutation.isError,
        isLoading: mutation.isLoading,
        postCasier: mutation.mutate,
        isSuccess: mutation.isSuccess,
        data: mutation.data,
      };
};

 export const usePutCasier = () => {
    const mutation = useMutation({
        mutationFn: (data:any) => PutCasier.put(data),
      });
    
      return {
        error: mutation.isError,
        isLoading: mutation.isLoading,
        putCasier: mutation.mutate,
        isSuccess: mutation.isSuccess,
        data: mutation.data,
      };
};

const useDeleteCasier = () => {
    const mutation = useMutation({
        mutationFn: (data:any) => DeleteCasier.delete(data),
      });
    
      return {
        error: mutation.isError,
        isLoading: mutation.isLoading,
        deleteCasier: mutation.mutate,
        isSuccess: mutation.isSuccess,
        data: mutation.data,
      };
}