import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlockFigureEntity } from './infrastructure/storage/orm/block-figure.orm';
import { BlockFigureCreateController } from './presentation/create/block-figure-create.controller';
import { CreateBlockFigureUseCase } from './use-cases/create/create-block-figure.use-case';
import { BlockFigureRepositoryPort } from './domain/ports/block-figure-repository.port';
import { BlockFigureRepositoryOrmAdapter } from './infrastructure/storage/orm/block-figure.orm.entity.adapter';

@Module({
  imports: [TypeOrmModule.forFeature([BlockFigureEntity])],
  controllers: [BlockFigureCreateController],
  providers: [
    CreateBlockFigureUseCase,
    {
      provide: BlockFigureRepositoryPort,
      useClass: BlockFigureRepositoryOrmAdapter,
    },
  ],
})
export class BlockFigureModule {}
