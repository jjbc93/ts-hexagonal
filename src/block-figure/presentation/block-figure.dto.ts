import { BlockFigure } from '@block-figure/domain/block-figure.domain';
import { IsNumber, IsPositive, IsString, IsUUID } from 'class-validator';

export class BlockFigureDto {
  @IsNumber()
  id?: number;

  @IsUUID()
  uuid: string;

  @IsString()
  name: string;

  @IsString()
  brand: string;

  @IsNumber()
  @IsPositive()
  pieces: number;

  constructor(blockFigure: Partial<BlockFigure>) {
    Object.assign(this, blockFigure);
  }
}
