import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Demand } from './types/demand.type';
import { DemandInput } from './types/demand.input';
import { DemandService } from './demand.service';

@Resolver(of => Demand)
export class DemandResolver {
  constructor(private readonly demandService: DemandService) { }

  @Mutation(() => Demand)
  async demandCreate(@Args('input') input: DemandInput) {
    return await this.demandService.create(input);
  }

  @Query(() => [Demand], { name: 'demands' })
  async getDemands() {
    return await this.demandService.findAll();
  }

  @Query(() => Demand, { name: 'demand' })
  async getDemand(@Args('id') id: string) {
    return await this.demandService.findOne(id);
  }
}
