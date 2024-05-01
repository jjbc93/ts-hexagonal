import { CustomerRepositoryPort } from '@customers/domain/ports/customer-repository.port';
import { Customer } from '@customers/domain/customers.domain';
import { Inject, Injectable } from '@nestjs/common';
import { CreateCustomerRequestDto } from './customer-create.dto';
import { CustomerFactory } from '@customers/domain/customer.factory';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { CustomerCreatedEvent } from '@customers/domain/events/customer-created';

@Injectable()
export class CreateCustomerUseCase {
  constructor(
    @Inject('CustomerRepositoryPort')
    private readonly customerRepository: CustomerRepositoryPort,
    private readonly eventEmitter: EventEmitter2,
  ) {}
  async execute(request: CreateCustomerRequestDto): Promise<Customer> {
    const customer = CustomerFactory.fromValues(
      request.name,
      request.lastName,
      request.email,
    );
    const newCustomer = await this.customerRepository.create(customer);
    this.eventEmitter.emit(
      'customer.created',
      new CustomerCreatedEvent(newCustomer.fullName),
    );
    return newCustomer;
  }
}
