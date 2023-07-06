import { User } from "../components/publicUser/types/User"

export type Casier = {
    casierId : number,
    dateInculpation? : string,
    dateDelie? : string,
    peine? : string,
    dateAudiance? : string,
    casierUser?: User[]
}