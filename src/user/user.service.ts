import { Injectable } from '@nestjs/common';
import { UserModel } from './user.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(UserModel) private readonly userModel: ReturnModelType<typeof UserModel>) {}

  async create( user: UserModel) {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async findAll(): Promise<UserModel[] | null> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<UserModel | null> {
    return this.userModel.findOne(id);
  }

  // async update(id: string, user: UserModel): Promise<UserModel> {
  //   return await this.userModel.findByIdAndUpdate(id, user, { new: true });
  // }
  //
  // async delete(id: string): Promise<UserModel> {
  //   return await this.userModel.findByIdAndRemove(id);
  // }
}
