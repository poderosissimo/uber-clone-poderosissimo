import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type ReactionWhereInput = {
  author?: StringNullableFilter;
  comment?: CommentWhereUniqueInput;
  id?: StringFilter;
  post?: PostWhereUniqueInput;
  reactionType?: "Option1";
};
