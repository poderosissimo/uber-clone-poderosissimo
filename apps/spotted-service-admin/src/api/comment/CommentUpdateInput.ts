import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { ReactionUpdateManyWithoutCommentsInput } from "./ReactionUpdateManyWithoutCommentsInput";

export type CommentUpdateInput = {
  author?: string | null;
  commentAuthor?: string | null;
  content?: string | null;
  post?: PostWhereUniqueInput | null;
  reactions?: ReactionUpdateManyWithoutCommentsInput;
};
