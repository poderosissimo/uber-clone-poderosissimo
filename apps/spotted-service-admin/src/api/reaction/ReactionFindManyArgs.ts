import { ReactionWhereInput } from "./ReactionWhereInput";
import { ReactionOrderByInput } from "./ReactionOrderByInput";

export type ReactionFindManyArgs = {
  where?: ReactionWhereInput;
  orderBy?: Array<ReactionOrderByInput>;
  skip?: number;
  take?: number;
};
