import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { Record } from '../record/record.entity';

@Entity({ name: 'currencies' })
export class Currency {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => User, (user) => user.currency)
  users: User[];

  @OneToMany(() => Record, (record) => record.currency)
  records: Record[];
}
