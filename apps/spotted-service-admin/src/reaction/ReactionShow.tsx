import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { COMMENT_TITLE_FIELD } from "../comment/CommentTitle";
import { POST_TITLE_FIELD } from "../post/PostTitle";

export const ReactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
