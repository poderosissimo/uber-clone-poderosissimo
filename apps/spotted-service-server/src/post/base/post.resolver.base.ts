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
import { Post } from "./Post";
import { PostCountArgs } from "./PostCountArgs";
import { PostFindManyArgs } from "./PostFindManyArgs";
import { PostFindUniqueArgs } from "./PostFindUniqueArgs";
import { CreatePostArgs } from "./CreatePostArgs";
import { UpdatePostArgs } from "./UpdatePostArgs";
import { DeletePostArgs } from "./DeletePostArgs";
import { CommentFindManyArgs } from "../../comment/base/CommentFindManyArgs";
import { Comment } from "../../comment/base/Comment";
import { ReactionFindManyArgs } from "../../reaction/base/ReactionFindManyArgs";
import { Reaction } from "../../reaction/base/Reaction";
import { PostService } from "../post.service";
@graphql.Resolver(() => Post)
export class PostResolverBase {
  constructor(protected readonly service: PostService) {}

  async _postsMeta(
    @graphql.Args() args: PostCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Post])
  async posts(@graphql.Args() args: PostFindManyArgs): Promise<Post[]> {
    return this.service.posts(args);
  }

  @graphql.Query(() => Post, { nullable: true })
  async post(@graphql.Args() args: PostFindUniqueArgs): Promise<Post | null> {
    const result = await this.service.post(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Post)
  async createPost(@graphql.Args() args: CreatePostArgs): Promise<Post> {
    return await this.service.createPost({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Post)
  async updatePost(@graphql.Args() args: UpdatePostArgs): Promise<Post | null> {
    try {
      return await this.service.updatePost({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Post)
  async deletePost(@graphql.Args() args: DeletePostArgs): Promise<Post | null> {
    try {
      return await this.service.deletePost(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Comment], { name: "comments" })
  async findComments(
    @graphql.Parent() parent: Post,
    @graphql.Args() args: CommentFindManyArgs
  ): Promise<Comment[]> {
    const results = await this.service.findComments(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Reaction], { name: "reactions" })
  async findReactions(
    @graphql.Parent() parent: Post,
    @graphql.Args() args: ReactionFindManyArgs
  ): Promise<Reaction[]> {
    const results = await this.service.findReactions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
