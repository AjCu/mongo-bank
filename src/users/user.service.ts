import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModule: Model<UserDocument>,
  ) {}
  async findAllUsers() {
    const allUsers = await this.userModule.find({}).exec();
    return allUsers;
  }
  async findUserBy(id: string) {
    const wantedUser = await this.userModule.findById(id).exec();
    return wantedUser;
  }
  async createUser(UserDto: UserDto) {
    const createdUser = new this.userModule(UserDto);
    return await createdUser.save();
  }
  async updateUser(id: string, UserDto: UserDto) {
    const updatedUser = await this.userModule.findByIdAndUpdate(id, UserDto, {
      new: true,
    });
    return updatedUser;
  }
  async deleteUser(id: string) {
    const deletedUser = await this.userModule.findByIdAndDelete(id);
    return deletedUser;
  }
}
