/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { CommentWhereUniqueInput } from "../../comment/base/CommentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PostWhereUniqueInput } from "../../post/base/PostWhereUniqueInput";
import { EnumReactionReactionType } from "./EnumReactionReactionType";

@InputType()
class ReactionWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  author?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => CommentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CommentWhereUniqueInput)
  @IsOptional()
  @Field(() => CommentWhereUniqueInput, {
    nullable: true,
  })
  comment?: CommentWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => PostWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PostWhereUniqueInput)
  @IsOptional()
  @Field(() => PostWhereUniqueInput, {
    nullable: true,
  })
  post?: PostWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumReactionReactionType,
  })
  @IsEnum(EnumReactionReactionType)
  @IsOptional()
  @Field(() => EnumReactionReactionType, {
    nullable: true,
  })
  reactionType?: "Option1";
}

export { ReactionWhereInput as ReactionWhereInput };
