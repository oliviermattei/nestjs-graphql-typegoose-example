import { Field, InputType } from 'type-graphql';
import { Demand } from './demand.type';

@InputType()
export class DemandInput implements Partial<Demand> {
  @Field()
  name: string;
}
