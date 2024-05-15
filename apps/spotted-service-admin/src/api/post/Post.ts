import { Comment } from "../comment/Comment";
import { Reaction } from "../reaction/Reaction";

export type Post = {
  author: string | null;
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  postAuthor: string | null;
  reactions?: Array<Reaction>;
  updatedAt: Date;
};
