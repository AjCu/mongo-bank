import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transfer, TransferDocument } from './schemas/transfer.schema';
import { TransferDto } from './dto/transfer.dto';
@Injectable()
export class TransfersService {
  constructor(
    @InjectModel(Transfer.name) private transferModule: Model<TransferDocument>,
  ) {}
  async findAllTransfers() {
    const allTransfers = await this.transferModule.find({}).exec();
    return allTransfers;
  }
  async findTransferBy(id: string) {
    const wantedTransfer = await this.transferModule.findById(id).exec();
    return wantedTransfer;
  }
  async createTransfer(TransferDto: TransferDto) {
    const createdTransfer = new this.transferModule(TransferDto);
    return await createdTransfer.save();
  }
}
