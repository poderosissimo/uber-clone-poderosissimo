import { RideRequest } from "../rideRequest/RideRequest";

export type RideDetails = {
  createdAt: Date;
  distance: number | null;
  endTime: Date | null;
  feedback: string | null;
  id: string;
  rideRequest?: RideRequest | null;
  startTime: Date | null;
  updatedAt: Date;
};
