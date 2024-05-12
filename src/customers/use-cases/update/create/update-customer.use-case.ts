import { CustomerRepositoryPort } from '@customers/domain/ports/customer-repository.port';
import { Customer } from '@customers/domain/customers.domain';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UpdateCustomerRequestDto } from './update-customer.dto';

@Injectable()
export class UpdateCustomerUseCase {
  constructor(
    @Inject(CustomerRepositoryPort)
    private readonly customerRepository: CustomerRepositoryPort,
  ) {}
  async execute(request: UpdateCustomerRequestDto): Promise<Customer> {
    const criteria = { email: request.email };
    const foundCustomer = await this.customerRepository.findOne(criteria);
    if (!foundCustomer) {
      throw new NotFoundException('Customer not found');
    }
    foundCustomer.updateCustomer(request.name, request.lastName);
    const updateCustomer = await this.customerRepository.update(foundCustomer);
    return updateCustomer;
  }
}
