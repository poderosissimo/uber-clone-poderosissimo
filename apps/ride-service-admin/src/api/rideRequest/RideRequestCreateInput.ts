import { RideDetailsCreateNestedManyWithoutRideRequestsInput } from "./RideDetailsCreateNestedManyWithoutRideRequestsInput";

export type RideRequestCreateInput = {
  driverId?: string | null;
  dropLocation?: string | null;
  fare?: number | null;
  pickupLocation?: string | null;
  rideDetailsItems?: RideDetailsCreateNestedManyWithoutRideRequestsInput;
  status?: "Option1" | null;
  userId?: string | null;
};
