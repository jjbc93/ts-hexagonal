import { IsString, IsUUID } from 'class-validator';
import { CustomerDto } from '../customer.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CustomersFindOneResponseDto {
  customer: CustomerDto;

  constructor(customer: CustomerDto) {
    this.customer = customer;
  }
}

export class CustomerParamFindOneDto {
  @ApiProperty()
  @IsUUID()
  id: string;
}
