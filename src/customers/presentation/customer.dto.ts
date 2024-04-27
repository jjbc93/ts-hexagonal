import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CustomerDto {
  @IsNumber()
  id?: number;

  @IsString()
  uuid: string;

  @IsString()
  name: string;

  @IsString()
  lastName: string;

  @IsString()
  fullName: string;

  @IsString()
  @IsEmail()
  email: string;

  constructor(customer: Partial<CustomerDto>) {
    Object.assign(this, customer);
  }
}
