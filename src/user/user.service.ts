import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';

const users: UserDto[] = [
  {
    id: 1,
    name: 'Vadim',
  },
  {
    id: 2,
    name: 'Alex',
  },
];

@Injectable()
export class UserService {
  createUser(userDto: UserDto): UserDto {
    users.push(userDto);
    return userDto;
  }
}
