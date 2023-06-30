import { useMutation } from "@tanstack/react-query"
import { FetchCinAnalyseService } from "../services/Auth"
import { CIN } from "../components/publicUser/Register/CinAnalysResult"
import { User } from "../components/publicUser/types/User"

export const useAnalysCin = () => {
    const mutation = useMutation({
        mutationFn: (cin:File) => FetchCinAnalyseService<User>(cin),
    })

    return {
        error: mutation.isError,
        isLoading: mutation.isLoading,
        analysCinMutate: mutation.mutate,
        isSuccess: mutation.isSuccess,
        data: mutation.data
    }
}
