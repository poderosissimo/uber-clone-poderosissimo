import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { RIDEREQUEST_TITLE_FIELD } from "../rideRequest/RideRequestTitle";

export const RideDetailsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
