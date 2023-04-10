import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TransfersService } from './transfers.service';
import { TransferDto } from './dto/transfer.dto';

@Controller()
export class TransfersController {
  constructor(private readonly transferService: TransfersService) {}

  @Post('transfers/create')
  async create(@Body() createTransferDto: TransferDto) {
    const newTransfer = await this.transferService.createTransfer(
      createTransferDto,
    );
    return newTransfer;
  }
  @Get('transfers')
  async getTransfers() {
    return await this.transferService.findAllTransfers();
  }
  @Get('transfers/:id')
  async getTransfersById(@Param('id') id: string) {
    return await this.transferService.findTransferBy(id);
  }
}
