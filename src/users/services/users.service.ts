import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser } from '../interface/users.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterAuthDto } from 'src/auth/dto/register-auth.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<IUser>) {}
  async findOne(username: string): Promise<IUser> {
    const user = await this.userModel.findOne({ username }).exec();
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return user;
  }
  async create(userObject: RegisterAuthDto): Promise<any> {
    const { password } = userObject;
    const plainToHash = await hash(password, 10);
    const users = await new this.userModel({
      ...userObject,
      password: plainToHash,
    });
    return users.save();
  }
}
