import { useMutation } from "@tanstack/react-query";
import { Login } from "../services/UserService";

export const useSignIn  = () => {
    const mutation = useMutation({
        mutationFn: (data:any) => Login.post(data),
    });

    return {
        error: mutation.isError,
        isLoading: mutation.isLoading,
        signIn: mutation.mutate,
        isSuccess: mutation.isSuccess,
        data: mutation.data,
    };
}