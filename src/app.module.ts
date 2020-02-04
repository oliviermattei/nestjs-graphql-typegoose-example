import {Module} from '@nestjs/common';
import {TypegooseModule} from 'nestjs-typegoose';
import {GraphQLModule} from '@nestjs/graphql';
import {DemandModule} from './demand/demand.module';
import {UserModule} from './user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    TypegooseModule.forRoot('mongodb+srv://mongotest:mongotest@test-tqajp.gcp.mongodb.net/test?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    UserModule,
    DemandModule,
  ],
})
export class AppModule {}
