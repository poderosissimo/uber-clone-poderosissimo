/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { RatingResult } from "./RatingResult";
import { RatingResultCountArgs } from "./RatingResultCountArgs";
import { RatingResultFindManyArgs } from "./RatingResultFindManyArgs";
import { RatingResultFindUniqueArgs } from "./RatingResultFindUniqueArgs";
import { DeleteRatingResultArgs } from "./DeleteRatingResultArgs";
import { RatingResultService } from "../ratingResult.service";
@graphql.Resolver(() => RatingResult)
export class RatingResultResolverBase {
  constructor(protected readonly service: RatingResultService) {}

  async _ratingResultsMeta(
    @graphql.Args() args: RatingResultCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [RatingResult])
  async ratingResults(
    @graphql.Args() args: RatingResultFindManyArgs
  ): Promise<RatingResult[]> {
    return this.service.ratingResults(args);
  }

  @graphql.Query(() => RatingResult, { nullable: true })
  async ratingResult(
    @graphql.Args() args: RatingResultFindUniqueArgs
  ): Promise<RatingResult | null> {
    const result = await this.service.ratingResult(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => RatingResult)
  async deleteRatingResult(
    @graphql.Args() args: DeleteRatingResultArgs
  ): Promise<RatingResult | null> {
    try {
      return await this.service.deleteRatingResult(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
