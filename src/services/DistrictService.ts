import { District } from "../types/District";
import APICLIENT from "./api-client";

export const GetDistrict =  new APICLIENT<District>('/District');

export const PostDistrict = new APICLIENT<District>('/District');

export const PutDistrict = new APICLIENT<District>('/District');

export const DeleteDistrict = new APICLIENT<District>('/District');