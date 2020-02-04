import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {Demand} from './types/demand.type';
import {DemandInput} from './types/demand.input';
import {DemandService} from './demand.service';
import {ObjectId} from 'mongodb';
import {ObjectIdScalar} from '../scalars/objectId.scalar';

@Resolver(of => Demand)
export class DemandResolver {
  constructor(private readonly demandService: DemandService) { }

  @Query(() => Demand)
  async demand(@Args({name : 'id', type : () => ObjectIdScalar}) id: ObjectId) {
    return await this.demandService.findById(id);
  }

  @Query(returns => [Demand])
  async demands() {
    return await this.demandService.find();
  }

  @Mutation(returns => Demand)
  async demandCreate(@Args('input') input: DemandInput) {
    return await this.demandService.create(input);
  }
}
