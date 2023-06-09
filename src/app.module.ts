import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { TransfersModule } from './transfers/transfers.module';
import { ActionsModule } from './actions/actions.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URI_STRING_CONNECTION || ''),
    UsersModule,
    TransfersModule,
    ActionsModule,
  ],
})
export class AppModule {}
