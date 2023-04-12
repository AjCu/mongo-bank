import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/users/user.service';
import { ActionDto } from './dto/action.dto';
import { TransfersService } from 'src/transfers/transfers.service';

@Controller()
export class ActionsController {
  constructor(
    private readonly userService: UserService,
    private readonly transferService: TransfersService,
  ) {}

  @Post('actions/deposit')
  async generateDeposit(@Body() content: ActionDto) {
    const user = await this.userService.findUserBy(content.userFrom);
    if (user !== null) {
      const newAmount: number = Number(user.money) + Number(content.moneyMoved);
      user.money = newAmount;
      await this.userService.updateUser(user.id, user);
      const baseObject = { date: new Date(), type: 'deposito' };
      const resultTransfer = await this.transferService.createTransfer({
        ...content,
        ...baseObject,
      });
      return resultTransfer;
    } else {
      return 'User not found';
    }
  }

  @Post('actions/withdraw')
  async generateWithdraw(@Body() content: ActionDto) {
    const user = await this.userService.findUserBy(content.userFrom);
    if (user !== null) {
      const newAmount: number = Number(user.money) - Number(content.moneyMoved);
      if (newAmount >= 0) {
        user.money = newAmount;
        await this.userService.updateUser(user.id, user);
        const baseObject = { date: new Date(), type: 'retiro' };
        const resultTransfer = await this.transferService.createTransfer({
          ...content,
          ...baseObject,
        });
        return resultTransfer;
      } else {
        return 'Insufficient funds';
      }
    } else {
      return 'User not found';
    }
  }

  @Post('actions/transfer')
  async generateTransfer(@Body() content: ActionDto) {
    const userFrom = await this.userService.findUserBy(content.userFrom);
    const userTo = await this.userService.findUserBy(content.userTo as string);
    if (userFrom !== null && userTo !== null) {
      const newAmountFrom: number =
        Number(userFrom.money) - Number(content.moneyMoved);
      const newAmountTo: number =
        Number(userTo.money) + Number(content.moneyMoved);
      if (newAmountFrom >= 0) {
        userFrom.money = newAmountFrom;
        userTo.money = newAmountTo;
        await this.userService.updateUser(userFrom.id, userFrom);
        await this.userService.updateUser(userTo.id, userTo);
        const baseObject = { date: new Date(), type: 'transferencia' };
        const resultTransfer = await this.transferService.createTransfer({
          ...content,
          ...baseObject,
        });
        return resultTransfer;
      } else {
        return 'Insufficient funds';
      }
    } else {
      return 'User not found';
    }
  }
}
