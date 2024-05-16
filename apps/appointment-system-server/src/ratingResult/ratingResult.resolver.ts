import * as graphql from "@nestjs/graphql";
import { RatingResultResolverBase } from "./base/ratingResult.resolver.base";
import { RatingResult } from "./base/RatingResult";
import { RatingResultService } from "./ratingResult.service";

@graphql.Resolver(() => RatingResult)
export class RatingResultResolver extends RatingResultResolverBase {
  constructor(protected readonly service: RatingResultService) {
    super(service);
  }
}
