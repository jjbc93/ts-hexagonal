import { CustomerRepositoryPort } from '@customers/domain/ports/customer-repository.port';
import { Customer } from '@customers/domain/customers.domain';
import { Inject, Injectable } from '@nestjs/common';
import { CreateCustomerRequestDto } from './customer-create.dto';
import { CustomerFactory } from '@customers/domain/customer.factory';
import {
  CustomerCreated,
  CustomerCreatedEvent,
} from '@customers/domain/events/customer-created';
import { EventEmitAdapterService } from '@shared/infrastructure/notifications/events/event-emit.adapter';

@Injectable()
export class CreateCustomerUseCase {
  constructor(
    @Inject(CustomerRepositoryPort)
    private readonly customerRepository: CustomerRepositoryPort,
    private readonly eventEmitAdapterService: EventEmitAdapterService,
  ) {}
  async execute(request: CreateCustomerRequestDto): Promise<Customer> {
    const customer = CustomerFactory.fromValues(
      request.name,
      request.lastName,
      request.email,
    );
    const newCustomer = await this.customerRepository.create(customer);
    this.eventEmitAdapterService.emit(
      CustomerCreated,
      new CustomerCreatedEvent(newCustomer.fullName),
    );
    return newCustomer;
  }
}
