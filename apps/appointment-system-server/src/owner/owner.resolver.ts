import * as graphql from "@nestjs/graphql";
import { OwnerResolverBase } from "./base/owner.resolver.base";
import { Owner } from "./base/Owner";
import { OwnerService } from "./owner.service";

@graphql.Resolver(() => Owner)
export class OwnerResolver extends OwnerResolverBase {
  constructor(protected readonly service: OwnerService) {
    super(service);
  }
}
