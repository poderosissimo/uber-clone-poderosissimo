import { Reaction as TReaction } from "../api/reaction/Reaction";

export const REACTION_TITLE_FIELD = "author";

export const ReactionTitle = (record: TReaction): string => {
  return record.author?.toString() || String(record.id);
};
