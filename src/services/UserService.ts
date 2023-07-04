import APICLIENT from "./api-client";
import { User } from "../components/publicUser/types/User";
import { Auth } from "../components/publicUser/types/Auth";

export const Register = new APICLIENT<User>('/User/register');
export const Login = new APICLIENT<Auth>('/User/authenticate');   