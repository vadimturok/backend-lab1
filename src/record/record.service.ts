import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RecordDto } from './record.dto';
import { Record } from './record.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { CategoryService } from '../category/category.service';
import { Currency } from '../currency/currency.entity';
import { CurrencyService } from '../currency/currency.service';

@Injectable()
export class RecordService {
  constructor(
    @InjectRepository(Record) private recordRepository: Repository<Record>,
    private userService: UserService,
    private categoryService: CategoryService,
    private currencyService: CurrencyService,
  ) {}
  async createRecord(recordDto: RecordDto) {
    const foundCategory = await this.categoryService.getById(
      recordDto.categoryId,
    );
    const foundUser = await this.userService.getById(recordDto.userId);
    if (!foundCategory || !foundUser) {
      throw new HttpException(
        'User or category not found',
        HttpStatus.NOT_FOUND,
      );
    }
    const record = new Record();
    if (recordDto.currencyId) {
      const foundCurrency = await this.currencyService.getById(
        recordDto.currencyId,
      );
      if (foundCurrency) {
        record.currency = foundCurrency;
      }
    } else {
      record.currency = foundUser.currency;
    }
    record.createdDate = new Date();
    record.totalSum = recordDto.totalSum;
    record.category = foundCategory;
    record.user = foundUser;
    return await this.recordRepository.save(record);
  }

  async getByUserId(userId: number) {
    return await this.recordRepository.find({
      relations: {
        user: true,
        category: true,
        currency: true,
      },
      where: {
        user: { id: userId },
      },
    });
  }

  async getByCategoryAndUserId(categoryId: number, userId: number) {
    return await this.recordRepository.find({
      relations: {
        user: true,
        category: true,
        currency: true,
      },
      where: {
        user: { id: userId },
        category: { id: categoryId },
      },
    });
  }
}
