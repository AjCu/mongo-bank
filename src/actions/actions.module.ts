import { Module } from '@nestjs/common';
import { ActionsController } from './actions.controller';
import { ActionsService } from './actions.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from 'src/users/user.service';
import { User, UserSchema } from 'src/users/schemas/user.schema';
import {
  Transfer,
  TransferSchema,
} from 'src/transfers/schemas/transfer.schema';
import { TransfersService } from 'src/transfers/transfers.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Transfer.name, schema: TransferSchema },
    ]),
  ],
  controllers: [ActionsController],
  providers: [ActionsService, UserService, TransfersService],
})
export class ActionsModule {}
