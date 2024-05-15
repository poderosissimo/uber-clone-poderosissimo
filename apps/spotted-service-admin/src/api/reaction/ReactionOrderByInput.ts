import { SortOrder } from "../../util/SortOrder";

export type ReactionOrderByInput = {
  author?: SortOrder;
  commentId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postId?: SortOrder;
  reactionType?: SortOrder;
  updatedAt?: SortOrder;
};
