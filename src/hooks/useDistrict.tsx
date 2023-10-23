import { useMutation, useQuery } from "@tanstack/react-query"
import { DeleteDistrict, GetDistrict, PostDistrict, PutDistrict } from "../services/DistrictService";

const useGetDistrict =  () => {
    const getDistrictQuery = useQuery({queryKey:["get_district"], queryFn:() => GetDistrict.get()})
};

const usePostDistrict = () => {
    const mutation = useMutation({
        mutationFn: (data:any) => PostDistrict.post(data),
      });
    
      return {
        error: mutation.isError,
        isLoading: mutation.isLoading,
        postDistrict: mutation.mutate,
        isSuccess: mutation.isSuccess,
        data: mutation.data,
      };
};

const usePutDistrict = () => {
    const mutation = useMutation({
        mutationFn: (data:any) => PutDistrict.put(data),
      });
    
      return {
        error: mutation.isError,
        isLoading: mutation.isLoading,
        putDistrict: mutation.mutate,
        isSuccess: mutation.isSuccess,
        data: mutation.data,
      };
};

const useDeleteDistrict = () => {
    const mutation = useMutation({
        mutationFn: (data:any) => DeleteDistrict.delete(data),
      });
    
      return {
        error: mutation.isError,
        isLoading: mutation.isLoading,
        deleteDistrict: mutation.mutate,
        isSuccess: mutation.isSuccess,
        data: mutation.data,
      };
}