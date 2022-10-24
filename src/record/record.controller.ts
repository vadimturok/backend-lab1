import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { RecordService } from './record.service';
import { RecordDto } from './record.dto';

@Controller('records')
export class RecordController {
  constructor(private recordService: RecordService) {}

  @Post()
  create(@Body() recordDto: RecordDto) {
    return this.recordService.createRecord(recordDto);
  }

  @Get('user')
  getByUserId(@Query('userId') userId) {
    return this.recordService.getByUserId(+userId);
  }

  @Get('category')
  getByCategoryAndUserId(
    @Query('userId') userId,
    @Query('categoryId') categoryId,
  ) {
    return this.recordService.getByCategoryAndUserId(+categoryId, +userId);
  }
}
