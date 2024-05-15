import { RideDetails as TRideDetails } from "../api/rideDetails/RideDetails";

export const RIDEDETAILS_TITLE_FIELD = "id";

export const RideDetailsTitle = (record: TRideDetails): string => {
  return record.id?.toString() || String(record.id);
};
