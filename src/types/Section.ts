import { User } from "../components/publicUser/types/User"

export type Section = {
    sectionId: number,
    sectionName: string,
    users: User[],
    districtId: number,
    sectionDistrict: string
}