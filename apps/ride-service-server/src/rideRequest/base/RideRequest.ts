/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  IsOptional,
  IsNumber,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { RideDetails } from "../../rideDetails/base/RideDetails";
import { EnumRideRequestStatus } from "./EnumRideRequestStatus";

@ObjectType()
class RideRequest {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  driverId!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  dropLocation!: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  fare!: number | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  pickupLocation!: string | null;

  @ApiProperty({
    required: false,
    type: () => [RideDetails],
  })
  @ValidateNested()
  @Type(() => RideDetails)
  @IsOptional()
  rideDetailsItems?: Array<RideDetails>;

  @ApiProperty({
    required: false,
    enum: EnumRideRequestStatus,
  })
  @IsEnum(EnumRideRequestStatus)
  @IsOptional()
  @Field(() => EnumRideRequestStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  userId!: string | null;
}

export { RideRequest as RideRequest };