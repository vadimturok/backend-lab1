import { Injectable } from '@nestjs/common';
import { RecordDto } from './record.dto';

const records: RecordDto[] = [
  {
    id: 1,
    userId: 1,
    categoryId: 2,
    createdDate: '24.10.2022 19:56',
    totalSum: 150,
  },
  {
    id: 2,
    userId: 1,
    categoryId: 1,
    createdDate: '25.10.2022 19:56',
    totalSum: 3500,
  },
  {
    id: 3,
    userId: 2,
    categoryId: 2,
    createdDate: '24.10.2022 19:56',
    totalSum: 1300,
  },
];
@Injectable()
export class RecordService {
  createRecord(recordDto: RecordDto): RecordDto {
    records.push(recordDto);
    console.log(records);
    return recordDto;
  }

  getByUserId(userId: number): RecordDto[] {
    return records.filter((record) => record.userId === userId);
  }

  getByCategoryAndUserId(categoryId: number, userId: number): RecordDto[] {
    return records.filter(
      (record) => record.categoryId === categoryId && record.userId === userId,
    );
  }
}
