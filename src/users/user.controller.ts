import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('users/create')
  async create(@Body() createUserDto: UserDto) {
    const newUser = await this.userService.createUser(createUserDto);
    return newUser;
  }

  @Get('users')
  async getUsers() {
    return await this.userService.findAllUsers();
  }
  @Get('users/:id')
  async getUsersById(@Param('id') id: string) {
    return await this.userService.findUserBy(id);
  }
}
