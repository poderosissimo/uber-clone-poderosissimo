import * as graphql from "@nestjs/graphql";
import { ReactionResolverBase } from "./base/reaction.resolver.base";
import { Reaction } from "./base/Reaction";
import { ReactionService } from "./reaction.service";

@graphql.Resolver(() => Reaction)
export class ReactionResolver extends ReactionResolverBase {
  constructor(protected readonly service: ReactionService) {
    super(service);
  }
}
