import { atom } from "recoil";
import { User } from "../components/publicUser/types/User";

const userAtom = atom<User| undefined>({
  key: "userAtom",
  default: {} as User
});

export default userAtom;