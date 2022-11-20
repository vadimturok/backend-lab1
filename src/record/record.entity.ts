import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../category/category.entity';
import { User } from '../user/user.entity';
import { Currency } from '../currency/currency.entity';

@Entity({ name: 'records' })
export class Record {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdDate: Date;

  @Column()
  totalSum: number;

  @ManyToOne(() => Category, (category) => category.records)
  category: Category;

  @ManyToOne(() => User, (user) => user.records)
  user: User;

  @ManyToOne(() => Currency, (currency) => currency.records)
  currency: Currency;
}
