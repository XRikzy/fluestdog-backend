import { IsNotEmpty, IsString, MinLength } from 'class-validator'

export class RegisterAuthDto {
  @IsString()
  @IsNotEmpty()
  readonly username: string
  @IsString()
  @IsNotEmpty()
  @MinLength(4, { message: 'la contraseña es muy corta' })
  readonly password: string
}
