import { Injectable } from '@nestjs/common';
import { CategoryDto } from './category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async createCategory(categoryDto: CategoryDto) {
    return await this.categoryRepository.save(categoryDto);
  }

  async getAll() {
    return await this.categoryRepository.find();
  }

  async getById(id: number) {
    return await this.categoryRepository.findOne({
      where: {
        id: id,
      },
    });
  }
}
