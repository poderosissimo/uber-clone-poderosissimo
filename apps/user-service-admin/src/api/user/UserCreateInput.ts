import { DriverCreateNestedManyWithoutUsersInput } from "./DriverCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  drivers?: DriverCreateNestedManyWithoutUsersInput;
  email?: string | null;
  name?: string | null;
  password?: string | null;
  phoneNumber?: string | null;
  role?: "Option1" | null;
};
