import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TransferDocument = HydratedDocument<Transfer>;

@Schema()
export class Transfer {
  @Prop()
  date: Date;

  @Prop()
  type: string;

  @Prop()
  userFrom: string;

  @Prop()
  userTo: string;

  @Prop()
  moneyMoved: number;
}

export const TransferSchema = SchemaFactory.createForClass(Transfer);
