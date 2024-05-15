import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CommentTitle } from "../comment/CommentTitle";
import { ReactionTitle } from "../reaction/ReactionTitle";

export const PostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Author" source="author" />
        <ReferenceArrayInput
          source="comments"
          reference="Comment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentTitle} />
        </ReferenceArrayInput>
        <TextInput label="content" multiline source="content" />
        <TextInput label="postAuthor" source="postAuthor" />
        <ReferenceArrayInput
          source="reactions"
          reference="Reaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReactionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
