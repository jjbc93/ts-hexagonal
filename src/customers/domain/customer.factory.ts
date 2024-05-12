import { CustomerEntity } from '@customers/infrastructure/storage/orm/customer.entity.orm';
import { Customer } from './customers.domain';
import { randomUUID } from 'crypto';

export class CustomerFactory {
  static entityToDomainWithoutValidation(entity: CustomerEntity): Customer {
    return Customer.createWithoutValidation({
      id: entity.id,
      uuid: entity.uuid,
      name: entity.name,
      email: entity.email,
      lastName: entity.lastName,
    });
  }

  static entityToDomainWithValidation(entity: CustomerEntity): Customer {
    return Customer.createWithValidation({
      id: entity.id,
      uuid: entity.uuid,
      name: entity.name,
      email: entity.email,
      lastName: entity.lastName,
    });
  }

  static fromValues(name: string, lastName: string, email: string): Customer {
    return Customer.createWithValidation({
      uuid: randomUUID(),
      name,
      lastName,
      email,
    });
  }
}
