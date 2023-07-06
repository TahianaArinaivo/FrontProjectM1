import { User } from "../components/publicUser/types/User";

export const useStatSex = (users: User[] | undefined) => {
    const feminins = users?.filter?.(user => user.sex === "Feminin").length;
    const masculins = users?.filter?.(user => user.sex === "Masculin").length;
    //const total = feminins && masculins ?  feminins + masculins: 0 

    return {
        feminins,
        masculins,
        total: users?.length 
    }
};
