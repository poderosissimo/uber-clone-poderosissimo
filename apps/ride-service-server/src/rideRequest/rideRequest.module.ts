import { Module } from "@nestjs/common";
import { RideRequestModuleBase } from "./base/rideRequest.module.base";
import { RideRequestService } from "./rideRequest.service";
import { RideRequestController } from "./rideRequest.controller";
import { RideRequestResolver } from "./rideRequest.resolver";

@Module({
  imports: [RideRequestModuleBase],
  controllers: [RideRequestController],
  providers: [RideRequestService, RideRequestResolver],
  exports: [RideRequestService],
})
export class RideRequestModule {}
