/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Account } from "./Account";
import { AccountCountArgs } from "./AccountCountArgs";
import { AccountFindManyArgs } from "./AccountFindManyArgs";
import { AccountFindUniqueArgs } from "./AccountFindUniqueArgs";
import { DeleteAccountArgs } from "./DeleteAccountArgs";
import { AccountService } from "../account.service";
@graphql.Resolver(() => Account)
export class AccountResolverBase {
  constructor(protected readonly service: AccountService) {}

  async _accountsMeta(
    @graphql.Args() args: AccountCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Account])
  async accounts(
    @graphql.Args() args: AccountFindManyArgs
  ): Promise<Account[]> {
    return this.service.accounts(args);
  }

  @graphql.Query(() => Account, { nullable: true })
  async account(
    @graphql.Args() args: AccountFindUniqueArgs
  ): Promise<Account | null> {
    const result = await this.service.account(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Account)
  async deleteAccount(
    @graphql.Args() args: DeleteAccountArgs
  ): Promise<Account | null> {
    try {
      return await this.service.deleteAccount(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}