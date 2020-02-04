import { Field, ObjectType } from 'type-graphql';
import { ObjectIdScalar } from '../scalars/objectId.scalar';

@ObjectType()
export class User {
  @Field(type => ObjectIdScalar, { nullable: true })
  _id?: string;

  @Field({ nullable: true })
  name?: string;
}
