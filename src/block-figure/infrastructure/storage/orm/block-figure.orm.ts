import { CustomerBlockFigureEntity } from '@customers/infrastructure/storage/orm/customer-block-figure.entity';
import { CustomerEntity } from '@customers/infrastructure/storage/orm/customer.entity.orm';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BlockFigureEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uuid: string;

  @Column({ unique: true })
  name: string;

  @Column()
  brand: string;

  @Column()
  pieces: number;

  @OneToMany(
    () => CustomerBlockFigureEntity,
    (customerBlock) => customerBlock.blockFigure,
  )
  customers?: CustomerBlockFigureEntity[];
}
