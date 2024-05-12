import { CustomerDto } from '../customer.dto';

export class UpdateCustomerResponseDto {
  customer: CustomerDto;

  constructor(customer: CustomerDto) {
    this.customer = customer;
  }
}
