import { RideRequestWhereUniqueInput } from "../rideRequest/RideRequestWhereUniqueInput";

export type RideDetailsUpdateInput = {
  distance?: number | null;
  endTime?: Date | null;
  feedback?: string | null;
  rideRequest?: RideRequestWhereUniqueInput | null;
  startTime?: Date | null;
};
