import { CustomerDto } from '../customer.dto';

export class CustomersFindRequest {}

export class CustomersFindResponseDto {
  customers: CustomerDto[];

  constructor(customers: CustomerDto[]) {
    this.customers = customers;
  }
}
