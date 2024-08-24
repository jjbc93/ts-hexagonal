import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CustomerEntity } from './customer.entity.orm';
import { BlockFigureEntity } from '@block-figure/infrastructure/storage/orm/block-figure.orm';

@Entity()
export class CustomerBlockFigureEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uuid: string;

  @Column('decimal')
  purchasePrice: number;

  @Column()
  purchaseDate: Date;

  @ManyToOne(() => CustomerEntity, (customer) => customer.blockFigures)
  customer: CustomerEntity;

  @ManyToOne(() => BlockFigureEntity, (figure) => figure.customers)
  blockFigure: BlockFigureEntity;
}
