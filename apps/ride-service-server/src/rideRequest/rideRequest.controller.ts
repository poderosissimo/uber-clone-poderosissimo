import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RideRequestService } from "./rideRequest.service";
import { RideRequestControllerBase } from "./base/rideRequest.controller.base";

@swagger.ApiTags("rideRequests")
@common.Controller("rideRequests")
export class RideRequestController extends RideRequestControllerBase {
  constructor(protected readonly service: RideRequestService) {
    super(service);
  }
}
