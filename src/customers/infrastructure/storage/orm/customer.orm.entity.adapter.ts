import { CustomerEntity } from '@customers/infrastructure/storage/orm/customer.entity.orm';
import { CustomerFactory } from '@customers/infrastructure/customer.factory';
import { Customer } from '@customers/domain/customers.domain';
import { CustomerRepositoryPort } from '@customers/domain/ports/customer-repository.port';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlockFigureEntity } from '@block-figure/infrastructure/storage/orm/block-figure.orm';

export class CustomerRepositoryOrmAdapter implements CustomerRepositoryPort {
  constructor(
    @InjectRepository(CustomerEntity)
    private customerRepository: Repository<CustomerEntity>,
    @InjectRepository(BlockFigureEntity)
    private blockFigureRepository: Repository<BlockFigureEntity>,
  ) {}

  async find(query?: any): Promise<Customer[]> {
    const customersEntity = await this.customerRepository.find({
      where: query,
      relations: ['blockFigures.blockFigure'],
    });
    return customersEntity.map((customerEntity) =>
      CustomerFactory.entityToDomain(customerEntity),
    );
  }

  async findOne(query: any): Promise<Customer> {
    const customerEntity = await this.customerRepository.findOne({
      where: query,
      relations: ['blockFigures.blockFigure'],
    });
    return CustomerFactory.entityToDomain(customerEntity);
  }

  async create(customer: Customer): Promise<Customer> {
    const customerEntity = await this.customerRepository.save(customer);
    return CustomerFactory.entityToDomain(customerEntity);
  }

  async update(customer: Customer): Promise<Customer> {
    const updateCustomer = this.customerRepository.create(customer);
    const customerEntity = await this.customerRepository.save(updateCustomer);
    return CustomerFactory.entityToDomain(customerEntity);
  }
}
