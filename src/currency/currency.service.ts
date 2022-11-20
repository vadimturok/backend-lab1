import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Currency } from './currency.entity';
import { Repository } from 'typeorm';
import { CurrencyDto } from './currency.dto';

@Injectable()
export class CurrencyService {
  constructor(
    @InjectRepository(Currency)
    private currencyRepository: Repository<Currency>,
  ) {}

  async createNew(currency: CurrencyDto) {
    const isExists = await this.getByName(currency.name);
    if (isExists) {
      throw new HttpException(
        'Currency already exists',
        HttpStatus.BAD_REQUEST,
      );
    }
    const newCurrency = new Currency();
    newCurrency.name = currency.name;
    return await this.currencyRepository.save(newCurrency);
  }

  async getById(id: number) {
    return await this.currencyRepository.findOne({
      where: {
        id: id,
      },
    });
  }
  async getByName(name: string) {
    return await this.currencyRepository.findOne({
      where: {
        name: name,
      },
    });
  }
}
