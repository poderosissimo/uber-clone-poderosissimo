import { RideDetails } from "../rideDetails/RideDetails";

export type RideRequest = {
  createdAt: Date;
  driverId: string | null;
  dropLocation: string | null;
  fare: number | null;
  id: string;
  pickupLocation: string | null;
  rideDetailsItems?: Array<RideDetails>;
  status?: "Option1" | null;
  updatedAt: Date;
  userId: string | null;
};
