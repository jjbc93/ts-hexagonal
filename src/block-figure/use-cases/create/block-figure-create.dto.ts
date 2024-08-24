import { IsString, IsNumber, IsPositive, IsUUID } from 'class-validator';

export class CreateBlockFigureRequestDto {
  @IsString()
  name: string;

  @IsString()
  brand: string;

  @IsNumber()
  @IsPositive()
  pieces: number;
}
