import { Section } from "../types/Section";
import APICLIENT from "./api-client";

export const GetSection =  new APICLIENT<Section>('/Section');

export const PostSection = new APICLIENT<Section>('/Section');

export const PutSection = new APICLIENT<Section>('/Section');

export const DeleteSection = new APICLIENT<Section>('/Section');