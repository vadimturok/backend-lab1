import { IsNotEmpty, IsString } from 'class-validator';

export class CurrencyDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
