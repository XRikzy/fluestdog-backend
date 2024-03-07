import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { RegisterAuthDto } from '../dto/register-auth.dto';
import { LoginAuthDto } from '../dto/login-auth.dto';
import { isPublic } from 'src/decorator/decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  registerUser(@Body() userDto: RegisterAuthDto) {
    return this.authService.register(userDto);
  }
  @isPublic()
  @Post('login')
  loginUser(@Body() userDto: LoginAuthDto) {
    return this.authService.login(userDto);
  }
}
