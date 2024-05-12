import { Inject, Injectable } from '@nestjs/common';
import { CustomerRepositoryPort } from '@customers/domain/ports/customer-repository.port';
import { Customer } from '@customers/domain/customers.domain';

@Injectable()
export class FindCustomerUseCase {
  constructor(
    @Inject(CustomerRepositoryPort)
    private readonly customerRepository: CustomerRepositoryPort,
  ) {}
  async execute(query?: any): Promise<Customer[]> {
    return this.customerRepository.find(query);
  }
}
