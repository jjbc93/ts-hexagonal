import { Inject, Injectable } from '@nestjs/common';
import { CustomerRepositoryPort } from '@customers/domain/ports/customer-repository.port';
import { Customer } from '@customers/domain/customers.domain';
import { CustomerFindOneRequestDto } from './customer-find-one.dto';

@Injectable()
export class FindOneCustomerUseCase {
  constructor(
    @Inject(CustomerRepositoryPort)
    private readonly customerRepository: CustomerRepositoryPort,
  ) {}
  async execute(request: CustomerFindOneRequestDto): Promise<Customer> {
    const criteria = { uuid: request.id };
    return this.customerRepository.findOne(criteria);
  }
}
