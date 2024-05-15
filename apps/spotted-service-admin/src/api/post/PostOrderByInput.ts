import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  author?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postAuthor?: SortOrder;
  updatedAt?: SortOrder;
};
