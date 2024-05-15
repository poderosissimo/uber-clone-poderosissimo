import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RideRequestWhereUniqueInput } from "../rideRequest/RideRequestWhereUniqueInput";

export type RideDetailsWhereInput = {
  distance?: FloatNullableFilter;
  endTime?: DateTimeNullableFilter;
  feedback?: StringNullableFilter;
  id?: StringFilter;
  rideRequest?: RideRequestWhereUniqueInput;
  startTime?: DateTimeNullableFilter;
};
