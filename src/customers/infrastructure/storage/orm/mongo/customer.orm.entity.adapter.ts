import { CustomerEntity } from '@customers/domain/customer.entity.orm';
import { CustomerFactory } from '@customers/domain/customer.factory';
import { Customer } from '@customers/domain/customers.domain';
import { CustomerRepositoryPort } from '@customers/domain/ports/customer-repository.port';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class CustomerRepositoryMongoAdapter implements CustomerRepositoryPort {
  constructor(
    @InjectRepository(CustomerEntity)
    private customerRepository: Repository<CustomerEntity>,
  ) {}

  async find(): Promise<Customer[]> {
    const customersEntity = await this.customerRepository.find();
    return customersEntity.map((customerEntity) =>
      CustomerFactory.entityToDomainWithoutValidation(customerEntity),
    );
  }

  async create(customer: Customer): Promise<Customer> {
    const newCustomer = this.customerRepository.create(customer);
    const customerEntity = await this.customerRepository.save(newCustomer);
    return CustomerFactory.entityToDomainWithoutValidation(customerEntity);
  }
}
