import { Customer } from '../customers.domain';

export interface CustomerRepositoryPort {
  find(query?: any): Promise<Customer[]>;
  create(customer: Customer): Promise<Customer>;
}
