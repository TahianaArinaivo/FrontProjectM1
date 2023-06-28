import { useMutation } from "@tanstack/react-query"
import { FetchCinAnalyseService } from "../services/Auth"

export const useAnalysCin = () => {
    const mutation = useMutation({
        mutationFn: (cin:File) => FetchCinAnalyseService(cin)
    })

    return {
        error: mutation.isError,
        isLoading: mutation.isLoading,
        analysCinMutate: mutation.mutate,
        isSuccess: mutation.isSuccess
    }
}
