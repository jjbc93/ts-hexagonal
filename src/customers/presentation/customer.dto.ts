import { Expose, plainToClass } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsEmail,
  IsNumber,
  IsPositive,
  IsString,
  IsUUID,
} from 'class-validator';

export class CustomerBlogFigure {
  @IsUUID()
  uuid: string;

  @IsString()
  name: string;

  @IsNumber()
  @IsPositive()
  pieces: number;

  @IsDate()
  purchaseDate: Date;

  @IsNumber()
  @IsPositive()
  purchasePrice: number;
}

export class CustomerDto {
  @Expose()
  @IsNumber()
  id?: number;

  @Expose()
  @IsString()
  uuid: string;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  lastName: string;

  @Expose()
  @IsString()
  fullName: string;

  @Expose()
  @IsString()
  @IsEmail()
  email: string;

  @Expose()
  @IsArray()
  blockFigures: CustomerBlogFigure[];

  constructor(customer: Partial<CustomerDto>) {
    Object.assign(
      this,
      plainToClass(CustomerDto, customer, { excludeExtraneousValues: true }),
    );
  }
}
