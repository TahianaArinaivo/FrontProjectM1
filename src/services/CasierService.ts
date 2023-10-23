import { Casier } from "../types/Casier";
import APICLIENT from "./api-client";

export const GetCasier =  new APICLIENT<Casier>('/Casier');

export const PostCasier = new APICLIENT<Casier>('/Casier');

export const PutCasier = new APICLIENT<Casier>('/Casier');

export const DeleteCasier = new APICLIENT<Casier>('/Casier');   