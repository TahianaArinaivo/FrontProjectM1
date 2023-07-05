import { User } from "../components/publicUser/types/User"
import { Section } from "./Section"

export type District = {
    districtId: number,
    districtName: string,
    districtUsers: User[],
    districtSection: Section[]
}