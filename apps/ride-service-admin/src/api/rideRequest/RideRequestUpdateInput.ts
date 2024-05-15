import { RideDetailsUpdateManyWithoutRideRequestsInput } from "./RideDetailsUpdateManyWithoutRideRequestsInput";

export type RideRequestUpdateInput = {
  driverId?: string | null;
  dropLocation?: string | null;
  fare?: number | null;
  pickupLocation?: string | null;
  rideDetailsItems?: RideDetailsUpdateManyWithoutRideRequestsInput;
  status?: "Option1" | null;
  userId?: string | null;
};
