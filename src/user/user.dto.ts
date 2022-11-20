import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(5, { message: 'Min length must be 5' })
  name: string;
}
