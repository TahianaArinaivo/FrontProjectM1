import { User } from "./User";

export type Auth = {
    token: string;
    user: User;
}

export type Credentials = {
    tel?: string;
    password?: string
}