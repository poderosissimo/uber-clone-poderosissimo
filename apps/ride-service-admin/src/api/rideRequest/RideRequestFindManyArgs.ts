import { RideRequestWhereInput } from "./RideRequestWhereInput";
import { RideRequestOrderByInput } from "./RideRequestOrderByInput";

export type RideRequestFindManyArgs = {
  where?: RideRequestWhereInput;
  orderBy?: Array<RideRequestOrderByInput>;
  skip?: number;
  take?: number;
};
