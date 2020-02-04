import { Module } from '@nestjs/common';
import { DemandModel } from './models/demand.model';
import { TypegooseModule } from 'nestjs-typegoose';
import { DemandResolver } from './demand.resolver';
import { DemandService } from './demand.service';

@Module({
  imports: [TypegooseModule.forFeature([DemandModel])],
  // controllers: [UserController],
  providers: [DemandService, DemandResolver],
})
export class DemandModule {}
