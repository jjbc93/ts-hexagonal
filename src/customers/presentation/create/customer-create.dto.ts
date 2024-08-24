import { BlockFigureDto } from '@block-figure/presentation/block-figure.dto';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsObject()
  @IsOptional()
  blockFigure?: BlockFigureDto;
}
