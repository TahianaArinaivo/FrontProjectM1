import { CIN } from "../Register/CinAnalysResult";

export type User = CIN & {
    phone?: string;
    password?: string;
}