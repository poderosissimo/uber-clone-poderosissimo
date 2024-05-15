/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { RideRequestService } from "../rideRequest.service";
import { RideRequestCreateInput } from "./RideRequestCreateInput";
import { RideRequest } from "./RideRequest";
import { RideRequestFindManyArgs } from "./RideRequestFindManyArgs";
import { RideRequestWhereUniqueInput } from "./RideRequestWhereUniqueInput";
import { RideRequestUpdateInput } from "./RideRequestUpdateInput";
import { RideDetailsFindManyArgs } from "../../rideDetails/base/RideDetailsFindManyArgs";
import { RideDetails } from "../../rideDetails/base/RideDetails";
import { RideDetailsWhereUniqueInput } from "../../rideDetails/base/RideDetailsWhereUniqueInput";

export class RideRequestControllerBase {
  constructor(protected readonly service: RideRequestService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: RideRequest })
  async createRideRequest(
    @common.Body() data: RideRequestCreateInput
  ): Promise<RideRequest> {
    return await this.service.createRideRequest({
      data: data,
      select: {
        createdAt: true,
        driverId: true,
        dropLocation: true,
        fare: true,
        id: true,
        pickupLocation: true,
        status: true,
        updatedAt: true,
        userId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [RideRequest] })
  @ApiNestedQuery(RideRequestFindManyArgs)
  async rideRequests(@common.Req() request: Request): Promise<RideRequest[]> {
    const args = plainToClass(RideRequestFindManyArgs, request.query);
    return this.service.rideRequests({
      ...args,
      select: {
        createdAt: true,
        driverId: true,
        dropLocation: true,
        fare: true,
        id: true,
        pickupLocation: true,
        status: true,
        updatedAt: true,
        userId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: RideRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async rideRequest(
    @common.Param() params: RideRequestWhereUniqueInput
  ): Promise<RideRequest | null> {
    const result = await this.service.rideRequest({
      where: params,
      select: {
        createdAt: true,
        driverId: true,
        dropLocation: true,
        fare: true,
        id: true,
        pickupLocation: true,
        status: true,
        updatedAt: true,
        userId: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: RideRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRideRequest(
    @common.Param() params: RideRequestWhereUniqueInput,
    @common.Body() data: RideRequestUpdateInput
  ): Promise<RideRequest | null> {
    try {
      return await this.service.updateRideRequest({
        where: params,
        data: data,
        select: {
          createdAt: true,
          driverId: true,
          dropLocation: true,
          fare: true,
          id: true,
          pickupLocation: true,
          status: true,
          updatedAt: true,
          userId: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: RideRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRideRequest(
    @common.Param() params: RideRequestWhereUniqueInput
  ): Promise<RideRequest | null> {
    try {
      return await this.service.deleteRideRequest({
        where: params,
        select: {
          createdAt: true,
          driverId: true,
          dropLocation: true,
          fare: true,
          id: true,
          pickupLocation: true,
          status: true,
          updatedAt: true,
          userId: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/rideDetailsItems")
  @ApiNestedQuery(RideDetailsFindManyArgs)
  async findRideDetailsItems(
    @common.Req() request: Request,
    @common.Param() params: RideRequestWhereUniqueInput
  ): Promise<RideDetails[]> {
    const query = plainToClass(RideDetailsFindManyArgs, request.query);
    const results = await this.service.findRideDetailsItems(params.id, {
      ...query,
      select: {
        createdAt: true,
        distance: true,
        endTime: true,
        feedback: true,
        id: true,

        rideRequest: {
          select: {
            id: true,
          },
        },

        startTime: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/rideDetailsItems")
  async connectRideDetailsItems(
    @common.Param() params: RideRequestWhereUniqueInput,
    @common.Body() body: RideDetailsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rideDetailsItems: {
        connect: body,
      },
    };
    await this.service.updateRideRequest({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/rideDetailsItems")
  async updateRideDetailsItems(
    @common.Param() params: RideRequestWhereUniqueInput,
    @common.Body() body: RideDetailsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rideDetailsItems: {
        set: body,
      },
    };
    await this.service.updateRideRequest({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/rideDetailsItems")
  async disconnectRideDetailsItems(
    @common.Param() params: RideRequestWhereUniqueInput,
    @common.Body() body: RideDetailsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rideDetailsItems: {
        disconnect: body,
      },
    };
    await this.service.updateRideRequest({
      where: params,
      data,
      select: { id: true },
    });
  } 
  @common.Post("/cancel")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async CancelRide(
    @common.Body()
    body: string
  ): Promise<string> {
    return this.service.CancelRide(body);
  } 
}
