import { CustomerRepositoryPort } from '@customers/domain/ports/customer-repository.port';
import { Customer } from '@customers/domain/customers.domain';
import { Inject, Injectable } from '@nestjs/common';
import { CreateCustomerRequestDto } from './customer-create.dto';
import { CustomerFactory } from '@customers/domain/customer.factory';

@Injectable()
export class CreateCustomerUseCase {
  constructor(
    @Inject('CustomerRepositoryPort')
    private readonly customerRepository: CustomerRepositoryPort,
  ) {}
  async execute(request: CreateCustomerRequestDto): Promise<Customer> {
    const customer = CustomerFactory.fromValues(
      request.name,
      request.lastName,
      request.email,
    );
    return this.customerRepository.create(customer);
  }
}
