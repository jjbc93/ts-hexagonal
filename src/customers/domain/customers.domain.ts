import { Logger } from '@nestjs/common';

interface CustomerParams {
  id?: number;
  uuid: string;
  name: string;
  email: string;
  lastName: string;
}

export class Customer {
  id?: number;
  uuid: string;
  name: string;
  email: string;
  lastName: string;
  fullName: string;

  private constructor(params: CustomerParams) {
    (this.id = params.id),
      (this.uuid = params.uuid),
      (this.name = params.name),
      (this.email = params.email),
      (this.lastName = params.lastName),
      (this.fullName = `${params.name} ${params.lastName}`);
  }

  static createWithoutValidation(params: CustomerParams) {
    Logger.debug('Skip validation', 'Customer');
    return new Customer(params);
  }

  static createWithValidation(params: CustomerParams) {
    Logger.debug('Apply validation', 'Customer');
    return new Customer(params);
  }
}
