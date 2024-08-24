import { CustomerRepositoryPort } from '@customers/domain/ports/customer-repository.port';
import { Customer } from '@customers/domain/customers.domain';
import { Inject, Injectable } from '@nestjs/common';
import { CreateCustomerRequestDto } from './customer-create.dto';
import { CustomerFactory } from '@customers/infrastructure/customer.factory';
import {
  CustomerCreated,
  CustomerCreatedEvent,
} from '@customers/domain/events/customer-created';
import { EventEmitAdapterService } from '@shared/infrastructure/notifications/events/event-emit.adapter';
import { randomUUID } from 'crypto';
import { BlockFigureFactory } from '@block-figure/infrastructure/block-figure.factory';

@Injectable()
export class CreateCustomerUseCase {
  constructor(
    @Inject(CustomerRepositoryPort)
    private readonly customerRepository: CustomerRepositoryPort,
    private readonly eventEmitAdapterService: EventEmitAdapterService,
  ) {}
  async execute(request: CreateCustomerRequestDto): Promise<Customer> {
    /* //TODO: MEJOR QUE VENGAN DE BASE DE DATOS
    const blockFigures = data.map((item) =>
      BlockFigureFactory.fromValues('1', '2', 3),
    ); */
    const customer = Customer.fromValues({
      name: request.name,
      lastName: request.lastName,
      email: request.email,
      uuid: randomUUID(),
      blockFigures: [],
    });
    const newCustomer = await this.customerRepository.create(customer);
    this.eventEmitAdapterService.emit(
      CustomerCreated,
      new CustomerCreatedEvent(newCustomer.fullName),
    );
    return newCustomer;
  }
}
