import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.type';
import { UserInput } from './user.input';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) { }

  @Mutation(() => User)
  async userCreate(@Args('input') input: UserInput) {
    return await this.userService.create(input);
  }

  @Query(returns => [User], { name: 'users' })
  async getUsers() {
    return await this.userService.findAll();
  }

  @Query(returns => User, { name: 'user' })
  async getUser(@Args('id') id: string) {
    return await this.userService.findOne(id);
  }
}
