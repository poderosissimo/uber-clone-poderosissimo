import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
} from "react-admin";

import { RideDetailsTitle } from "../rideDetails/RideDetailsTitle";

export const RideRequestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="driverId" source="driverId" />
        <TextInput label="dropLocation" source="dropLocation" />
        <NumberInput label="fare" source="fare" />
        <TextInput label="pickupLocation" source="pickupLocation" />
        <ReferenceArrayInput
          source="rideDetailsItems"
          reference="RideDetails"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RideDetailsTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Create>
  );
};
