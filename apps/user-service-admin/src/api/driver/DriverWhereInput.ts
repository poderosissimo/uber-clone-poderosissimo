import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DriverWhereInput = {
  availability?: BooleanNullableFilter;
  id?: StringFilter;
  licenseNumber?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  vehicleDetails?: StringNullableFilter;
};
