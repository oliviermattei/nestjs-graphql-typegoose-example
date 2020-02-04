import { Injectable } from '@nestjs/common';
import { DemandModel } from './models/demand.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class DemandService {
  constructor(@InjectModel(DemandModel) private readonly demandModel: ReturnModelType<typeof DemandModel>) {}

  async create( demand: DemandModel) {
    const createDemand = new this.demandModel(demand);
    return createDemand.save();
  }

  async findAll(): Promise<DemandModel[] | null> {
    return this.demandModel.find().exec();
  }

  async findOne(id: string): Promise<DemandModel | null> {
    return this.demandModel.findById(id);
  }

  // async update(id: string, demand: UserModel): Promise<UserModel> {
  //   return await this.demandModel.findByIdAndUpdate(id, demand, { new: true });
  // }
  //
  // async delete(id: string): Promise<UserModel> {
  //   return await this.demandModel.findByIdAndRemove(id);
  // }
}
