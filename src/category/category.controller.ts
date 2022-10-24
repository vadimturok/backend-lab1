import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './category.dto';

@Controller('categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  create(@Body() categoryDto: CategoryDto): CategoryDto {
    return this.categoryService.createCategory(categoryDto);
  }

  @Get()
  getAll() {
    return this.categoryService.getAll();
  }
}
