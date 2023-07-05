import { useMutation, useQuery } from "@tanstack/react-query"
import { DeleteSection, GetSection, PostSection, PutSection } from "../services/SectionService";

const useGetSection =  () => {
    const getSectionQuery = useQuery({queryKey:["get_section"], queryFn:() => GetSection.get()})
};

const usePostSection = () => {
    const mutation = useMutation({
        mutationFn: (data:any) => PostSection.post(data),
      });
    
      return {
        error: mutation.isError,
        isLoading: mutation.isLoading,
        postSection: mutation.mutate,
        isSuccess: mutation.isSuccess,
        data: mutation.data,
      };
};

const usePutSection = () => {
    const mutation = useMutation({
        mutationFn: (data:any) => PutSection.put(data),
      });
    
      return {
        error: mutation.isError,
        isLoading: mutation.isLoading,
        putSection: mutation.mutate,
        isSuccess: mutation.isSuccess,
        data: mutation.data,
      };
};

const useDeleteSection = () => {
    const mutation = useMutation({
        mutationFn: (data:any) => DeleteSection.delete(data),
      });
    
      return {
        error: mutation.isError,
        isLoading: mutation.isLoading,
        deleteSection: mutation.mutate,
        isSuccess: mutation.isSuccess,
        data: mutation.data,
      };
}