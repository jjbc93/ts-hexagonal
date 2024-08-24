import { BlockFigureEntity } from '@block-figure/infrastructure/storage/orm/block-figure.orm';
import { blockFigureArray } from '@customers/domain/customers.domain';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CustomerBlockFigureEntity } from './customer-block-figure.entity';

@Entity()
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uuid: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  lastName: string;

  @OneToMany(
    () => CustomerBlockFigureEntity,
    (customerBlock) => customerBlock.customer,
  )
  blockFigures: CustomerBlockFigureEntity[];
}
