import { HttpException, Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { LoginAuthDto } from '../dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../users/services/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}
  async register(userRegister: any): Promise<any> {
    return this.userService.create(userRegister);
  }
  async login(userDto: LoginAuthDto): Promise<any> {
    const { username, password } = userDto;
    const user = await this.userService.findOne(username);
    if (!user) throw new HttpException('USER NO FOUND', 404);
    const checkPassword = await compare(password, user.password);
    if (!checkPassword) throw new HttpException('INCORRECT PASSWORD', 403);
    const payload = { sub: user._id, username: user.username };
    return {
      username: user.username,
      _id: user._id,
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
