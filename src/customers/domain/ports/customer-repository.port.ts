import { Customer } from '../customers.domain';

export const CustomerRepositoryPort = Symbol('CustomerRepositoryPort');

export interface CustomerRepositoryPort {
  find(query?: any): Promise<Customer[]>;
  findOne(query?: any): Promise<Customer>;
  create(customer: Customer): Promise<Customer>;
  update(customer: Customer): Promise<Customer>;
}
