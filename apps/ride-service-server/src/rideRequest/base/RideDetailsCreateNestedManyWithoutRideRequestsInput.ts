/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { RideDetailsWhereUniqueInput } from "../../rideDetails/base/RideDetailsWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class RideDetailsCreateNestedManyWithoutRideRequestsInput {
  @Field(() => [RideDetailsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RideDetailsWhereUniqueInput],
  })
  connect?: Array<RideDetailsWhereUniqueInput>;
}

export { RideDetailsCreateNestedManyWithoutRideRequestsInput as RideDetailsCreateNestedManyWithoutRideRequestsInput };