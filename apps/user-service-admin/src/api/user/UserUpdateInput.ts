import { DriverUpdateManyWithoutUsersInput } from "./DriverUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  drivers?: DriverUpdateManyWithoutUsersInput;
  email?: string | null;
  name?: string | null;
  password?: string | null;
  phoneNumber?: string | null;
  role?: "Option1" | null;
};
