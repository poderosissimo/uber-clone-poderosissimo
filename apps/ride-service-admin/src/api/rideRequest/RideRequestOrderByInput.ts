import { SortOrder } from "../../util/SortOrder";

export type RideRequestOrderByInput = {
  createdAt?: SortOrder;
  driverId?: SortOrder;
  dropLocation?: SortOrder;
  fare?: SortOrder;
  id?: SortOrder;
  pickupLocation?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
