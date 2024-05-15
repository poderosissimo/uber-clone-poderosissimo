import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COMMENT_TITLE_FIELD } from "../comment/CommentTitle";
import { POST_TITLE_FIELD } from "../post/PostTitle";

export const ReactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Reactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Author" source="author" />
        <ReferenceField label="Comment" source="comment.id" reference="Comment">
          <TextField source={COMMENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Post" source="post.id" reference="Post">
          <TextField source={POST_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="reactionType" source="reactionType" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
