import { Module } from '@nestjs/common'
import { AuthController } from '../controller/auth.controller'
import { AuthService } from '../service/auth.service'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from '../constants/constant'
import { UsersModule } from '../../users/module/users.module'

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '40h' }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}
