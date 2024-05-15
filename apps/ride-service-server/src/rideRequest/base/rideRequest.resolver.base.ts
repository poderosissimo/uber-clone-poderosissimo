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
import { RideRequest } from "./RideRequest";
import { RideRequestCountArgs } from "./RideRequestCountArgs";
import { RideRequestFindManyArgs } from "./RideRequestFindManyArgs";
import { RideRequestFindUniqueArgs } from "./RideRequestFindUniqueArgs";
import { CreateRideRequestArgs } from "./CreateRideRequestArgs";
import { UpdateRideRequestArgs } from "./UpdateRideRequestArgs";
import { DeleteRideRequestArgs } from "./DeleteRideRequestArgs";
import { RideDetailsFindManyArgs } from "../../rideDetails/base/RideDetailsFindManyArgs";
import { RideDetails } from "../../rideDetails/base/RideDetails";
import { RideRequestService } from "../rideRequest.service";
@graphql.Resolver(() => RideRequest)
export class RideRequestResolverBase {
  constructor(protected readonly service: RideRequestService) {}

  async _rideRequestsMeta(
    @graphql.Args() args: RideRequestCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [RideRequest])
  async rideRequests(
    @graphql.Args() args: RideRequestFindManyArgs
  ): Promise<RideRequest[]> {
    return this.service.rideRequests(args);
  }

  @graphql.Query(() => RideRequest, { nullable: true })
  async rideRequest(
    @graphql.Args() args: RideRequestFindUniqueArgs
  ): Promise<RideRequest | null> {
    const result = await this.service.rideRequest(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => RideRequest)
  async createRideRequest(
    @graphql.Args() args: CreateRideRequestArgs
  ): Promise<RideRequest> {
    return await this.service.createRideRequest({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => RideRequest)
  async updateRideRequest(
    @graphql.Args() args: UpdateRideRequestArgs
  ): Promise<RideRequest | null> {
    try {
      return await this.service.updateRideRequest({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => RideRequest)
  async deleteRideRequest(
    @graphql.Args() args: DeleteRideRequestArgs
  ): Promise<RideRequest | null> {
    try {
      return await this.service.deleteRideRequest(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [RideDetails], { name: "rideDetailsItems" })
  async findRideDetailsItems(
    @graphql.Parent() parent: RideRequest,
    @graphql.Args() args: RideDetailsFindManyArgs
  ): Promise<RideDetails[]> {
    const results = await this.service.findRideDetailsItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }  
  @graphql.Mutation(() => String)
  async CancelRide(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CancelRide(args);
  } 
}
