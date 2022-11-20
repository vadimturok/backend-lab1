import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Record } from '../record/record.entity';
import { Currency } from '../currency/currency.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Record, (record) => record.user)
  records: Record[];

  @ManyToOne(() => Currency, (currency) => currency.users)
  currency: Currency;
}
