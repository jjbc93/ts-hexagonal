export const EventEmitPort = Symbol('EventEmitPort');

export interface EventEmitPort {
  emit(event: string | symbol, ...values: any): boolean;
}
