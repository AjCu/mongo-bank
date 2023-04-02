import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TransferDto } from './dto/transfer.dto';
import { TransfersService } from './transfers.service';

@Controller('transfers')
export class TransfersController {
    constructor(private readonly transfersService: TransfersService) {}

  @Post()
  create(@Body() createAccountDto: TransferDto) {
    return this.transfersService.create(createAccountDto);
  }

  @Get()
  findAll() {
    return this.transfersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transfersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransfertDto: TransferDto) {
    return this.transfersService.update(+id, updateTransfertDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transfersService.remove(+id);
  }
}
