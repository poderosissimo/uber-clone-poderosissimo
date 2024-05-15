import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";
import { ReactionCreateNestedManyWithoutPostsInput } from "./ReactionCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  author?: string | null;
  comments?: CommentCreateNestedManyWithoutPostsInput;
  content?: string | null;
  postAuthor?: string | null;
  reactions?: ReactionCreateNestedManyWithoutPostsInput;
};
