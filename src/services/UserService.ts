import APICLIENT from "./api-client";
import { User } from "../components/publicUser/types/User";

export const Register = new APICLIENT<User>('/User/register');
export const Login = new APICLIENT<string>('/User/authenticate');   