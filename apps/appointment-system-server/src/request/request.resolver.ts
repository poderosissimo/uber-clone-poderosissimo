import * as graphql from "@nestjs/graphql";
import { RequestResolverBase } from "./base/request.resolver.base";
import { Request } from "./base/Request";
import { RequestService } from "./request.service";

@graphql.Resolver(() => Request)
export class RequestResolver extends RequestResolverBase {
  constructor(protected readonly service: RequestService) {
    super(service);
  }
}
