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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { PostWhereUniqueInput } from "../../post/base/PostWhereUniqueInput";
import { Type } from "class-transformer";
import { ReactionUpdateManyWithoutCommentsInput } from "./ReactionUpdateManyWithoutCommentsInput";

@InputType()
class CommentUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  author?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  commentAuthor?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

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
  post?: PostWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ReactionUpdateManyWithoutCommentsInput,
  })
  @ValidateNested()
  @Type(() => ReactionUpdateManyWithoutCommentsInput)
  @IsOptional()
  @Field(() => ReactionUpdateManyWithoutCommentsInput, {
    nullable: true,
  })
  reactions?: ReactionUpdateManyWithoutCommentsInput;
}

export { CommentUpdateInput as CommentUpdateInput };
