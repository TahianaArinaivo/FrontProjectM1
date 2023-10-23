import { CIN } from "../Register/CinAnalysResult";

export type User = CIN & {
  tel?: string;
  password?: string;
  role?: string;
  userId?: string;
  sex?: string;
  createdAt?: string;
  firstName?: string;
  placeOfIssue?: string;
  birthday?: string;
  fatherName?: string;
  motherName?: string;
  phone?:number
};
