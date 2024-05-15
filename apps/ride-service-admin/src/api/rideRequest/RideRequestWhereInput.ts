import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RideDetailsListRelationFilter } from "../rideDetails/RideDetailsListRelationFilter";

export type RideRequestWhereInput = {
  driverId?: StringNullableFilter;
  dropLocation?: StringNullableFilter;
  fare?: FloatNullableFilter;
  id?: StringFilter;
  pickupLocation?: StringNullableFilter;
  rideDetailsItems?: RideDetailsListRelationFilter;
  status?: "Option1";
  userId?: StringNullableFilter;
};
