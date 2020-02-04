import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Demand, DemandModel } from './types/demand.type';
import { DemandInput } from './types/demand.input';
import { Logger } from '@nestjs/common';

@Resolver(of => Demand)
export class DemandResolver {

  @Query(returns => [Demand])
  async demands(): Promise<Demand[]> {
    return await DemandModel.find({});
  }

  @Mutation(returns => Demand)
  async demandCreate(@Args('input') input: DemandInput): Promise<Demand> {
    const createDemand = new DemandModel(input as Demand);

    Logger.log(createDemand, 'createDemand');

    return await createDemand.save();
  }
}
