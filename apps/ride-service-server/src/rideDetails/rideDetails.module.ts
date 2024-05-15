import { Module } from "@nestjs/common";
import { RideDetailsModuleBase } from "./base/rideDetails.module.base";
import { RideDetailsService } from "./rideDetails.service";
import { RideDetailsController } from "./rideDetails.controller";
import { RideDetailsResolver } from "./rideDetails.resolver";

@Module({
  imports: [RideDetailsModuleBase],
  controllers: [RideDetailsController],
  providers: [RideDetailsService, RideDetailsResolver],
  exports: [RideDetailsService],
})
export class RideDetailsModule {}
