import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DriverCreateInput = {
  availability?: boolean | null;
  licenseNumber?: string | null;
  user?: UserWhereUniqueInput | null;
  vehicleDetails?: string | null;
};
