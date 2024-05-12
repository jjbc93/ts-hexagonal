import { CustomerEntity } from '@customers/infrastructure/storage/orm/customer.entity.orm';
import { CustomerFactory } from '@customers/domain/customer.factory';
import { Customer } from '@customers/domain/customers.domain';
import { CustomerRepositoryPort } from '@customers/domain/ports/customer-repository.port';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class CustomerRepositoryOrmAdapter implements CustomerRepositoryPort {
  constructor(
    @InjectRepository(CustomerEntity)
    private customerRepository: Repository<CustomerEntity>,
  ) {}

  async find(query?: any): Promise<Customer[]> {
    const customersEntity = await this.customerRepository.find({
      where: query,
    });
    return customersEntity.map((customerEntity) =>
      CustomerFactory.entityToDomainWithoutValidation(customerEntity),
    );
  }

  async findOne(query: any): Promise<Customer> {
    const customerEntity = await this.customerRepository.findOne({
      where: query,
    });
    return CustomerFactory.entityToDomainWithoutValidation(customerEntity);
  }

  async create(customer: Customer): Promise<Customer> {
    const newCustomer = this.customerRepository.create(customer);
    const customerEntity = await this.customerRepository.save(newCustomer);
    return CustomerFactory.entityToDomainWithoutValidation(customerEntity);
  }

  async update(customer: Customer): Promise<Customer> {
    const updateCustomer = this.customerRepository.create(customer);
    const customerEntity = await this.customerRepository.save(updateCustomer);
    return CustomerFactory.entityToDomainWithoutValidation(customerEntity);
  }
}
