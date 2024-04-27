import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCustomerRequestDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsString()
  @IsEmail()
  email: string;
}
