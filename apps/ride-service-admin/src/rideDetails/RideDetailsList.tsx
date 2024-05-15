import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { RIDEREQUEST_TITLE_FIELD } from "../rideRequest/RideRequestTitle";

export const RideDetailsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RideDetailsItems"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
