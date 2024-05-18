export const CustomerCreated = Symbol('customer.created');
export class CustomerCreatedEvent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
