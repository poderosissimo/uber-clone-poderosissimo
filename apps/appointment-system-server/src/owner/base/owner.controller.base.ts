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
import { OwnerService } from "../owner.service";
import { OwnerCreateInput } from "./OwnerCreateInput";
import { Owner } from "./Owner";
import { Request } from "../../request/base/Request";
import { OwnerFindManyArgs } from "./OwnerFindManyArgs";
import { OwnerWhereUniqueInput } from "./OwnerWhereUniqueInput";
import { OwnerUpdateInput } from "./OwnerUpdateInput";

export class OwnerControllerBase {
  constructor(protected readonly service: OwnerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Owner })
  async createOwner(@common.Body() data: OwnerCreateInput): Promise<Owner> {
    return await this.service.createOwner({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Owner] })
  @ApiNestedQuery(OwnerFindManyArgs)
  async owners(@common.Req() request: Request): Promise<Owner[]> {
    const args = plainToClass(OwnerFindManyArgs, request.query);
    return this.service.owners({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Owner })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async owner(
    @common.Param() params: OwnerWhereUniqueInput
  ): Promise<Owner | null> {
    const result = await this.service.owner({
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
  @swagger.ApiOkResponse({ type: Owner })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateOwner(
    @common.Param() params: OwnerWhereUniqueInput,
    @common.Body() data: OwnerUpdateInput
  ): Promise<Owner | null> {
    try {
      return await this.service.updateOwner({
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
  @swagger.ApiOkResponse({ type: Owner })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteOwner(
    @common.Param() params: OwnerWhereUniqueInput
  ): Promise<Owner | null> {
    try {
      return await this.service.deleteOwner({
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
