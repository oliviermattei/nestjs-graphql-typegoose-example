import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserModel } from './user.model';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserResolver } from './user.resolver';

@Module({
  imports: [TypegooseModule.forFeature([UserModel])],
  // controllers: [UserController],
  providers: [UserService, UserResolver],
})
export class UserModule {}
