import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { GraphQLModule } from '@nestjs/graphql';
import { DemandModule } from './demand/demand.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    TypegooseModule.forRoot('<MONGO_URL>', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    // UserModule,
    DemandModule,
  ],
})
export class AppModule {}
