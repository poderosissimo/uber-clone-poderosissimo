import { DriverListRelationFilter } from "../driver/DriverListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  drivers?: DriverListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  password?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  role?: "Option1";
};
