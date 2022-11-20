import { Body, Controller, Post } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CurrencyDto } from './currency.dto';

@Controller('currencies')
export class CurrencyController {
  constructor(private currencyService: CurrencyService) {}

  @Post()
  create(@Body() currency: CurrencyDto) {
    return this.currencyService.createNew(currency);
  }
}
