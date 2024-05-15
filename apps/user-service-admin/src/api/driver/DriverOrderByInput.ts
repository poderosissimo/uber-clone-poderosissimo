import { SortOrder } from "../../util/SortOrder";

export type DriverOrderByInput = {
  availability?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  licenseNumber?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  vehicleDetails?: SortOrder;
};
