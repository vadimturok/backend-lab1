import { Module } from '@nestjs/common';
import { RecordService } from './record.service';
import { RecordController } from './record.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Record } from './record.entity';
import { UserModule } from '../user/user.module';
import { CategoryModule } from '../category/category.module';
import { CurrencyModule } from '../currency/currency.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Record]),
    UserModule,
    CategoryModule,
    CurrencyModule,
  ],
  providers: [RecordService],
  controllers: [RecordController],
})
export class RecordModule {}
