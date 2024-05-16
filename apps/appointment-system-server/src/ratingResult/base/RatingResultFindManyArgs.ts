/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RatingResultWhereInput } from "./RatingResultWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RatingResultOrderByInput } from "./RatingResultOrderByInput";

@ArgsType()
class RatingResultFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RatingResultWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RatingResultWhereInput, { nullable: true })
  @Type(() => RatingResultWhereInput)
  where?: RatingResultWhereInput;

  @ApiProperty({
    required: false,
    type: [RatingResultOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RatingResultOrderByInput], { nullable: true })
  @Type(() => RatingResultOrderByInput)
  orderBy?: Array<RatingResultOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { RatingResultFindManyArgs as RatingResultFindManyArgs };