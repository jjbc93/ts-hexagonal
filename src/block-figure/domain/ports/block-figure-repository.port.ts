import { BlockFigure } from '../block-figure.domain';

export const BlockFigureRepositoryPort = Symbol('BlockFigureRepositoryPort');
export interface BlockFigureRepositoryPort {
  create(blockFigure: BlockFigure): Promise<BlockFigure>;
}
