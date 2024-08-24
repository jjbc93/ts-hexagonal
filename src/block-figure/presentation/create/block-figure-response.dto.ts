import { BlockFigureDto } from '../block-figure.dto';

export class CreateBlockFigureResponseDto {
  blockFigure: BlockFigureDto;

  constructor(blockFigure: BlockFigureDto) {
    this.blockFigure = blockFigure;
  }
}
