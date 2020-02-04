import { Field, InputType } from 'type-graphql';

@InputType()
export class DemandInput {
  @Field()
  readonly name: string;
}
