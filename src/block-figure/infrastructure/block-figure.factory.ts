import { BlockFigureEntity } from '@block-figure/infrastructure/storage/orm/block-figure.orm';
import { BlockFigure } from '../domain/block-figure.domain';

export class BlockFigureFactory {
  static entityToDomain(entity: BlockFigureEntity): BlockFigure {
    return BlockFigure.fromValues({
      id: entity.id,
      uuid: entity.uuid,
      name: entity.name,
      brand: entity.brand,
      pieces: entity.pieces,
    });
  }
}
