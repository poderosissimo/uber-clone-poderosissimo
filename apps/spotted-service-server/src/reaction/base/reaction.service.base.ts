/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Reaction as PrismaReaction,
  Comment as PrismaComment,
  Post as PrismaPost,
} from "@prisma/client";

export class ReactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ReactionCountArgs, "select">): Promise<number> {
    return this.prisma.reaction.count(args);
  }

  async reactions<T extends Prisma.ReactionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReactionFindManyArgs>
  ): Promise<PrismaReaction[]> {
    return this.prisma.reaction.findMany<Prisma.ReactionFindManyArgs>(args);
  }
  async reaction<T extends Prisma.ReactionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReactionFindUniqueArgs>
  ): Promise<PrismaReaction | null> {
    return this.prisma.reaction.findUnique(args);
  }
  async createReaction<T extends Prisma.ReactionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReactionCreateArgs>
  ): Promise<PrismaReaction> {
    return this.prisma.reaction.create<T>(args);
  }
  async updateReaction<T extends Prisma.ReactionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReactionUpdateArgs>
  ): Promise<PrismaReaction> {
    return this.prisma.reaction.update<T>(args);
  }
  async deleteReaction<T extends Prisma.ReactionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReactionDeleteArgs>
  ): Promise<PrismaReaction> {
    return this.prisma.reaction.delete(args);
  }

  async getComment(parentId: string): Promise<PrismaComment | null> {
    return this.prisma.reaction
      .findUnique({
        where: { id: parentId },
      })
      .comment();
  }

  async getPost(parentId: string): Promise<PrismaPost | null> {
    return this.prisma.reaction
      .findUnique({
        where: { id: parentId },
      })
      .post();
  }
}
