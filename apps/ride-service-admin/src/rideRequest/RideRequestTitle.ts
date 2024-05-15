import { RideRequest as TRideRequest } from "../api/rideRequest/RideRequest";

export const RIDEREQUEST_TITLE_FIELD = "driverId";

export const RideRequestTitle = (record: TRideRequest): string => {
  return record.driverId?.toString() || String(record.id);
};
