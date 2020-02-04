import { prop } from '@typegoose/typegoose';

export class UserModel {
  @prop()
  name?: string;
}
