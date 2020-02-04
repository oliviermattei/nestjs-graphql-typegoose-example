import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { DemandResolver } from './demand.resolver';
import { DemandService } from './demand.service';
import {Demand} from './types/demand.type';

@Module({
  imports: [TypegooseModule.forFeature([Demand])],
  providers: [DemandService, DemandResolver],
})
export class DemandModule {}
