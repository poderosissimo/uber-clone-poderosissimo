import { User } from "../user/User";

export type Driver = {
  availability: boolean | null;
  createdAt: Date;
  id: string;
  licenseNumber: string | null;
  updatedAt: Date;
  user?: User | null;
  vehicleDetails: string | null;
};
