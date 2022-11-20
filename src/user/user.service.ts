import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CurrencyService } from '../currency/currency.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private currencyService: CurrencyService,
  ) {}
  async createUser(userDto: UserDto) {
    const newCurrency = await this.currencyService.getByName('UAH');
    const newUser = new User();
    newUser.name = userDto.name;
    newUser.currency = newCurrency;
    return await this.userRepository.save(newUser);
  }

  async getById(id: number) {
    return await this.userRepository.findOne({
      relations: {
        currency: true,
      },
      where: {
        id: id,
      },
    });
  }
}
