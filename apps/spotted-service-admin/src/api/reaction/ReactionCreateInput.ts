import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type ReactionCreateInput = {
  author?: string | null;
  comment?: CommentWhereUniqueInput | null;
  post?: PostWhereUniqueInput | null;
  reactionType?: "Option1" | null;
};
