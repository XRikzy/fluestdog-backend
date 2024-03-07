import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateClipDto {
  @IsString()
  @IsNotEmpty({ message: 'rellene el titulo porfavor' })
  readonly title: string;
  @IsString()
  readonly description: string;
  @IsArray()
  @IsNotEmpty({ message: 'Agrege un tag a el video por favor' })
  readonly tags: string;
}
