import { CustomerDto } from '../customer.dto';

export class CreateCustomerResponseDto {
  customer: CustomerDto;

  constructor(customer: CustomerDto) {
    this.customer = customer;
  }
}
