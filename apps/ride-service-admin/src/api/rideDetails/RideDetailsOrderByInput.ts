import { SortOrder } from "../../util/SortOrder";

export type RideDetailsOrderByInput = {
  createdAt?: SortOrder;
  distance?: SortOrder;
  endTime?: SortOrder;
  feedback?: SortOrder;
  id?: SortOrder;
  rideRequestId?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
};
