import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TransferDto } from './dto/transfer.dto';
import { Transfer, TransferDocument } from './schemas/transfer.schema';

@Injectable()
export class TransfersService {
    constructor(
        @InjectModel(Transfer.name) private transferModule: Model<TransferDocument>,
      ) {}
    create(createTransferDto: TransferDto) {
        return 'This action adds a new transfer';
      }
    
      findAll() {
        return `This action returns all transfers`;
      }
    
      findOne(id: number) {
        return `This action returns a #${id} transfer`;
      }
    
      update(id: number, updateTransfeDto: TransferDto) {
        return `This action updates a #${id} transfer`;
      }
    
      remove(id: number) {
        return `This action removes a #${id} transfer`;
      }
}
