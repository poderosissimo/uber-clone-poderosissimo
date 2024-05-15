import { Driver } from "../driver/Driver";

export type User = {
  createdAt: Date;
  drivers?: Array<Driver>;
  email: string | null;
  id: string;
  name: string | null;
  password: string | null;
  phoneNumber: string | null;
  role?: "Option1" | null;
  updatedAt: Date;
};
