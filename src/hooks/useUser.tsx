import { useQuery } from "@tanstack/react-query"
import { UserService } from "../services/UserService"

export const useGetUser = () => {
    const userQuery = useQuery({queryKey: ["get_user"], queryFn: () => UserService.get()})
    return {
        data: userQuery.data,
        error: userQuery.isError,
        isLoading: userQuery.isLoading,
        isSuccess: userQuery.isSuccess,   
    }
}

