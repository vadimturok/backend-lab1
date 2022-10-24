import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { RecordModule } from './record/record.module';

@Module({
  imports: [UserModule, CategoryModule, RecordModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
