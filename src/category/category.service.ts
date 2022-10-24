import { Injectable } from '@nestjs/common';
import { CategoryDto } from './category.dto';

const categories: CategoryDto[] = [
  {
    id: 1,
    name: 'category1',
  },
  {
    id: 2,
    name: 'category2',
  },
];

@Injectable()
export class CategoryService {
  createCategory(categoryDto: CategoryDto): CategoryDto {
    categories.push(categoryDto);
    return categoryDto;
  }

  getAll(): CategoryDto[] {
    return categories;
  }
}
