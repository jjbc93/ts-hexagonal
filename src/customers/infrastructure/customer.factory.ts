import { CustomerEntity } from '@customers/infrastructure/storage/orm/customer.entity.orm';
import { Customer } from '../domain/customers.domain';
import { BlockFigureFactory } from '@block-figure/infrastructure/block-figure.factory';

export class CustomerFactory {
  static entityToDomain(entity: CustomerEntity): Customer {
    const blockFiguresDomain = entity?.blockFigures?.map((figure) => {
      return {
        ...BlockFigureFactory.entityToDomain({ ...figure.blockFigure }),
        purchaseDate: figure.purchaseDate,
        purchasePrice: figure.purchasePrice,
      };
    });
    return Customer.fromValues({
      id: entity.id,
      uuid: entity.uuid,
      name: entity.name,
      email: entity.email,
      lastName: entity.lastName,
      blockFigures: blockFiguresDomain ?? [],
    });
  }
}
