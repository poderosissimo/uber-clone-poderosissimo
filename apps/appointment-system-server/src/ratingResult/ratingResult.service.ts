import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RatingResultServiceBase } from "./base/ratingResult.service.base";

@Injectable()
export class RatingResultService extends RatingResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
