import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { RIDEREQUEST_TITLE_FIELD } from "./RideRequestTitle";

export const RideRequestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="driverId" source="driverId" />
        <TextField label="dropLocation" source="dropLocation" />
        <TextField label="fare" source="fare" />
        <TextField label="ID" source="id" />
        <TextField label="pickupLocation" source="pickupLocation" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userId" source="userId" />
        <ReferenceManyField
          reference="RideDetails"
          target="rideRequestId"
          label="RideDetailsItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="distance" source="distance" />
            <TextField label="endTime" source="endTime" />
            <TextField label="feedback" source="feedback" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="rideRequest"
              source="riderequest.id"
              reference="RideRequest"
            >
              <TextField source={RIDEREQUEST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="startTime" source="startTime" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
