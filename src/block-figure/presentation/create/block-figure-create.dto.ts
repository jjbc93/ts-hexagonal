import { IsNumber, IsPositive, IsString, IsUUID } from 'class-validator';

export class CreateBlockFigureDto {
  @IsString()
  name: string;

  @IsString()
  brand: string;

  @IsNumber()
  @IsPositive()
  pieces: number;
}
