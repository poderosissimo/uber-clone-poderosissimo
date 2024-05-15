import * as graphql from "@nestjs/graphql";
import { RideDetailsResolverBase } from "./base/rideDetails.resolver.base";
import { RideDetails } from "./base/RideDetails";
import { RideDetailsService } from "./rideDetails.service";

@graphql.Resolver(() => RideDetails)
export class RideDetailsResolver extends RideDetailsResolverBase {
  constructor(protected readonly service: RideDetailsService) {
    super(service);
  }
}
