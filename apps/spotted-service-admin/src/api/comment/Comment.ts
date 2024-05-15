import { Post } from "../post/Post";
import { Reaction } from "../reaction/Reaction";

export type Comment = {
  author: string | null;
  commentAuthor: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  post?: Post | null;
  reactions?: Array<Reaction>;
  updatedAt: Date;
};
