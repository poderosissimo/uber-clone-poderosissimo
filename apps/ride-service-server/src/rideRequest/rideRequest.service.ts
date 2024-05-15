import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RideRequestServiceBase } from "./base/rideRequest.service.base";

@Injectable()
export class RideRequestService extends RideRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
