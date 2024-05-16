import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RequestService } from "./request.service";
import { RequestControllerBase } from "./base/request.controller.base";

@swagger.ApiTags("requests")
@common.Controller("requests")
export class RequestController extends RequestControllerBase {
  constructor(protected readonly service: RequestService) {
    super(service);
  }
}
