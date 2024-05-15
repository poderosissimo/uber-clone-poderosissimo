import { RideDetailsWhereInput } from "./RideDetailsWhereInput";
import { RideDetailsOrderByInput } from "./RideDetailsOrderByInput";

export type RideDetailsFindManyArgs = {
  where?: RideDetailsWhereInput;
  orderBy?: Array<RideDetailsOrderByInput>;
  skip?: number;
  take?: number;
};
