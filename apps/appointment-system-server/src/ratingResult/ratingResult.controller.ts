import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RatingResultService } from "./ratingResult.service";
import { RatingResultControllerBase } from "./base/ratingResult.controller.base";

@swagger.ApiTags("ratingResults")
@common.Controller("ratingResults")
export class RatingResultController extends RatingResultControllerBase {
  constructor(protected readonly service: RatingResultService) {
    super(service);
  }
}
