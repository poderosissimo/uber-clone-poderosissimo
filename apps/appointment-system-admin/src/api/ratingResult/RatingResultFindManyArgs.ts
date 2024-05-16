import { RatingResultWhereInput } from "./RatingResultWhereInput";
import { RatingResultOrderByInput } from "./RatingResultOrderByInput";

export type RatingResultFindManyArgs = {
  where?: RatingResultWhereInput;
  orderBy?: Array<RatingResultOrderByInput>;
  skip?: number;
  take?: number;
};
