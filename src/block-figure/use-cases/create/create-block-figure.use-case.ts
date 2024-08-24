import { Inject } from '@nestjs/common';
import { BlockFigure } from '@block-figure/domain/block-figure.domain';
import { CreateBlockFigureRequestDto } from './block-figure-create.dto';
import { BlockFigureRepositoryPort } from '@block-figure/domain/ports/block-figure-repository.port';
import { randomUUID } from 'crypto';

export class CreateBlockFigureUseCase {
  constructor(
    @Inject(BlockFigureRepositoryPort)
    private readonly blockFigureRepository: BlockFigureRepositoryPort,
  ) {}

  async execute(request: CreateBlockFigureRequestDto): Promise<BlockFigure> {
    const blockFigure = BlockFigure.fromValues({
      name: request.name,
      brand: request.brand,
      pieces: request.pieces,
      uuid: randomUUID(),
    });
    return this.blockFigureRepository.create(blockFigure);
  }
}
