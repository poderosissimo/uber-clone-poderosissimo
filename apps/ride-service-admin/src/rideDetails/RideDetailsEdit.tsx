import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RideRequestTitle } from "../rideRequest/RideRequestTitle";

export const RideDetailsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="distance" source="distance" />
        <DateTimeInput label="endTime" source="endTime" />
        <TextInput label="feedback" multiline source="feedback" />
        <ReferenceInput
          source="rideRequest.id"
          reference="RideRequest"
          label="rideRequest"
        >
          <SelectInput optionText={RideRequestTitle} />
        </ReferenceInput>
        <DateTimeInput label="startTime" source="startTime" />
      </SimpleForm>
    </Edit>
  );
};
