import { Injectable, Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { EventEmitPort } from '@shared/domain/ports/event.port';

@Injectable()
export class EventEmitAdapterService implements EventEmitPort {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  public emit(event: string | symbol, values: any): boolean {
    Logger.debug(`Emit ${event.toString()}`);
    return this.eventEmitter.emit(event, values);
  }
}
