import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RideDetailsService } from "./rideDetails.service";
import { RideDetailsControllerBase } from "./base/rideDetails.controller.base";

@swagger.ApiTags("rideDetails")
@common.Controller("rideDetails")
export class RideDetailsController extends RideDetailsControllerBase {
  constructor(protected readonly service: RideDetailsService) {
    super(service);
  }
}
