import { IsNotEmpty } from 'class-validator';

export class RecordDto {
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  categoryId: number;

  @IsNotEmpty()
  totalSum: number;

  currencyId?: number;
}
