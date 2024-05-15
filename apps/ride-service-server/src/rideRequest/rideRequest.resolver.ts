import * as graphql from "@nestjs/graphql";
import { RideRequestResolverBase } from "./base/rideRequest.resolver.base";
import { RideRequest } from "./base/RideRequest";
import { RideRequestService } from "./rideRequest.service";

@graphql.Resolver(() => RideRequest)
export class RideRequestResolver extends RideRequestResolverBase {
  constructor(protected readonly service: RideRequestService) {
    super(service);
  }
}
