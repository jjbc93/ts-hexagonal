import { BlockFigure } from '@block-figure/domain/block-figure.domain';
import { BlockFigureRepositoryPort } from '@block-figure/domain/ports/block-figure-repository.port';
import { InjectRepository } from '@nestjs/typeorm';
import { BlockFigureEntity } from './block-figure.orm';
import { Repository } from 'typeorm';
import { BlockFigureFactory } from '@block-figure/infrastructure/block-figure.factory';

export class BlockFigureRepositoryOrmAdapter
  implements BlockFigureRepositoryPort
{
  constructor(
    @InjectRepository(BlockFigureEntity)
    private readonly blockFigureRepository: Repository<BlockFigureEntity>,
  ) {}
  async create(blockFigure: BlockFigure): Promise<BlockFigure> {
    const newBlockFigure = this.blockFigureRepository.create(blockFigure);
    const blockFigureEntity =
      await this.blockFigureRepository.save(newBlockFigure);
    return BlockFigureFactory.entityToDomain(blockFigureEntity);
  }
}
