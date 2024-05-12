import { CustomerDto } from '../customer.dto';

export class CustomersFindResponseDto {
  customers: CustomerDto[];

  constructor(customers: CustomerDto[]) {
    this.customers = customers;
  }
}
