import { Owner as TOwner } from "../api/owner/Owner";

export const OWNER_TITLE_FIELD = "id";

export const OwnerTitle = (record: TOwner): string => {
  return record.id?.toString() || String(record.id);
};
