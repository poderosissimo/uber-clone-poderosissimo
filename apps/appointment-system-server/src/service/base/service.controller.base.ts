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
import { ServiceService } from "../service.service";
import { ServiceCreateInput } from "./ServiceCreateInput";
import { Service } from "./Service";
import { Request } from "../../request/base/Request";
import { ServiceFindManyArgs } from "./ServiceFindManyArgs";
import { ServiceWhereUniqueInput } from "./ServiceWhereUniqueInput";
import { ServiceUpdateInput } from "./ServiceUpdateInput";

export class ServiceControllerBase {
  constructor(protected readonly service: ServiceService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Service })
  async createService(
    @common.Body() data: ServiceCreateInput
  ): Promise<Service> {
    return await this.service.createService({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Service] })
  @ApiNestedQuery(ServiceFindManyArgs)
  async services(@common.Req() request: Request): Promise<Service[]> {
    const args = plainToClass(ServiceFindManyArgs, request.query);
    return this.service.services({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Service })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async service(
    @common.Param() params: ServiceWhereUniqueInput
  ): Promise<Service | null> {
    const result = await this.service.service({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Service })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateService(
    @common.Param() params: ServiceWhereUniqueInput,
    @common.Body() data: ServiceUpdateInput
  ): Promise<Service | null> {
    try {
      return await this.service.updateService({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Service })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteService(
    @common.Param() params: ServiceWhereUniqueInput
  ): Promise<Service | null> {
    try {
      return await this.service.deleteService({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
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
}
