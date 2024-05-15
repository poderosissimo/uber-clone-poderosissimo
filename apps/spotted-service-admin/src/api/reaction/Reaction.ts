import { Comment } from "../comment/Comment";
import { Post } from "../post/Post";

export type Reaction = {
  author: string | null;
  comment?: Comment | null;
  createdAt: Date;
  id: string;
  post?: Post | null;
  reactionType?: "Option1" | null;
  updatedAt: Date;
};
