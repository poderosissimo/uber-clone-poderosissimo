import { RatingResult as TRatingResult } from "../api/ratingResult/RatingResult";

export const RATINGRESULT_TITLE_FIELD = "id";

export const RatingResultTitle = (record: TRatingResult): string => {
  return record.id?.toString() || String(record.id);
};
