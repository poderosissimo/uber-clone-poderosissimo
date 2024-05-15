import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { POST_TITLE_FIELD } from "./PostTitle";
import { COMMENT_TITLE_FIELD } from "../comment/CommentTitle";

export const PostShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Author" source="author" />
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="postAuthor" source="postAuthor" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Comment"
          target="postId"
          label="Comments"
        >
          <Datagrid rowClick="show">
            <TextField label="Author" source="author" />
            <TextField label="commentAuthor" source="commentAuthor" />
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Post" source="post.id" reference="Post">
              <TextField source={POST_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Reaction"
          target="postId"
          label="Reactions"
        >
          <Datagrid rowClick="show">
            <TextField label="Author" source="author" />
            <ReferenceField
              label="Comment"
              source="comment.id"
              reference="Comment"
            >
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
