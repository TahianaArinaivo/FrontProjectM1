import Demande from "../components/publicUser/types/Demande";
import { Data } from "../types/Data";
import APICLIENT from "./api-client";

export const DemandeService = new APICLIENT<Data<Demande[]>>("/Demande");
