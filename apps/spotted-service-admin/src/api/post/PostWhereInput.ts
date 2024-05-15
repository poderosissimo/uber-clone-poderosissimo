import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReactionListRelationFilter } from "../reaction/ReactionListRelationFilter";

export type PostWhereInput = {
  author?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  postAuthor?: StringNullableFilter;
  reactions?: ReactionListRelationFilter;
};
