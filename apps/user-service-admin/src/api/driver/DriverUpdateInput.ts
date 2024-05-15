import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DriverUpdateInput = {
  availability?: boolean | null;
  licenseNumber?: string | null;
  user?: UserWhereUniqueInput | null;
  vehicleDetails?: string | null;
};
