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
import { RideDetailsWhereInput } from "./RideDetailsWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class RideDetailsCountArgs {
  @ApiProperty({
    required: false,
    type: () => RideDetailsWhereInput,
  })
  @Field(() => RideDetailsWhereInput, { nullable: true })
  @Type(() => RideDetailsWhereInput)
  where?: RideDetailsWhereInput;
}

export { RideDetailsCountArgs as RideDetailsCountArgs };