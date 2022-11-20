import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Currency } from './currency.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CurrencyService {
  constructor(
    @InjectRepository(Currency)
    private currencyRepository: Repository<Currency>,
  ) {}

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
