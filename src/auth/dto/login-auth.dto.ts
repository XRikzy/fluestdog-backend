import { IsNotEmpty, IsString, MinLength } from 'class-validator'

export class LoginAuthDto {
  @IsString()
  @IsNotEmpty()
  readonly username: string
  @IsNotEmpty()
  @MinLength(4, { message: 'la contraseña es muy corta' })
  readonly password: string
}
