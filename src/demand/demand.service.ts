import {Injectable, Logger} from '@nestjs/common';
import {Demand, DemandModel} from './types/demand.type';
import {ObjectId} from 'mongodb';
import {DemandInput} from './types/demand.input';

@Injectable()
export class DemandService {

  async create( demand: DemandInput) {
    const createDemand = new DemandModel(demand as Demand);

    return createDemand.save({validateBeforeSave: true}, (err) => Logger.error(err, 'errorsave'));

    // let response;
    // try {
    //   response = await createDemand.save({validateBeforeSave: true}, (err) => Logger.error(err, 'errorsave'));
    //   Logger.log(JSON.stringify(response), 'response');
    // } catch (e) {
    //   Logger.error(e);
    // }
    // return response;
  }

  async find(): Promise<Demand[] | null> {
    return DemandModel.find({});
  }

  async findById(id: ObjectId): Promise<Demand | null> {
    return DemandModel.findById(id);
  }

  // async update(id: string, demand: UserModel): Promise<UserModel> {
  //   return await this.demandModel.findByIdAndUpdate(id, demand, { new: true });
  // }
  //
  // async delete(id: string): Promise<UserModel> {
  //   return await this.demandModel.findByIdAndRemove(id);
  // }
}
