import { Module } from "@nestjs/common";
import { RatingResultModuleBase } from "./base/ratingResult.module.base";
import { RatingResultService } from "./ratingResult.service";
import { RatingResultController } from "./ratingResult.controller";
import { RatingResultResolver } from "./ratingResult.resolver";

@Module({
  imports: [RatingResultModuleBase],
  controllers: [RatingResultController],
  providers: [RatingResultService, RatingResultResolver],
  exports: [RatingResultService],
})
export class RatingResultModule {}
