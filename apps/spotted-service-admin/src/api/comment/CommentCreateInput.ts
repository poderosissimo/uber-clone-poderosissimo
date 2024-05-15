import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { ReactionCreateNestedManyWithoutCommentsInput } from "./ReactionCreateNestedManyWithoutCommentsInput";

export type CommentCreateInput = {
  author?: string | null;
  commentAuthor?: string | null;
  content?: string | null;
  post?: PostWhereUniqueInput | null;
  reactions?: ReactionCreateNestedManyWithoutCommentsInput;
};
