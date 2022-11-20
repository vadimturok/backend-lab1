import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RecordService } from './record.service';
import { RecordDto } from './record.dto';

@Controller('records')
export class RecordController {
  constructor(private recordService: RecordService) {}

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() recordDto: RecordDto) {
    return this.recordService.createRecord(recordDto);
  }

  @Get('user')
  getByUserId(@Query('userId', ParseIntPipe) userId: number) {
    return this.recordService.getByUserId(userId);
  }

  @Get('category')
  getByCategoryAndUserId(
    @Query('userId', ParseIntPipe) userId,
    @Query('categoryId', ParseIntPipe) categoryId,
  ) {
    return this.recordService.getByCategoryAndUserId(+categoryId, +userId);
  }
}
