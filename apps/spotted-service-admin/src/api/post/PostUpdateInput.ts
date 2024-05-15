import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";
import { ReactionUpdateManyWithoutPostsInput } from "./ReactionUpdateManyWithoutPostsInput";

export type PostUpdateInput = {
  author?: string | null;
  comments?: CommentUpdateManyWithoutPostsInput;
  content?: string | null;
  postAuthor?: string | null;
  reactions?: ReactionUpdateManyWithoutPostsInput;
};
