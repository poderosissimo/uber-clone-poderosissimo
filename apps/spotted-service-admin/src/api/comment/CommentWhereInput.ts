import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { ReactionListRelationFilter } from "../reaction/ReactionListRelationFilter";

export type CommentWhereInput = {
  author?: StringNullableFilter;
  commentAuthor?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  post?: PostWhereUniqueInput;
  reactions?: ReactionListRelationFilter;
};
