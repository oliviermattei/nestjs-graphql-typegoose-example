import { Field, ObjectType } from 'type-graphql';
import { getModelForClass, prop as Property } from '@typegoose/typegoose';
import { ObjectIdScalar } from '../../scalars/objectId.scalar';
import { ObjectId } from 'mongodb';

@ObjectType()
export class Demand {
  @Field(type => ObjectIdScalar)
  readonly _id: ObjectId;

  @Property({ required: true })
  @Field()
  name: string;
}

export const DemandModel = getModelForClass(Demand);
