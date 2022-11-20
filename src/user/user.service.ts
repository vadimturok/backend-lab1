import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async createUser(userDto: UserDto) {
    return await this.userRepository.save(userDto);
  }

  async getById(id: number) {
    return await this.userRepository.findOne({
      where: {
        id: id,
      },
    });
  }
}
