import { CustomerCreatedEvent } from '@customers/domain/events/customer-created';
import { Inject, Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { TelegramNotificationPort } from '@shared/domain/ports/telegram-notification.port';

@Injectable()
export class CustomerCreatedHandler {
  constructor(
    @Inject(TelegramNotificationPort)
    private readonly telegramService: TelegramNotificationPort,
  ) {}
  @OnEvent('customer.created')
  handleCustomerCreatedEvent(event: CustomerCreatedEvent): void {
    this.telegramService.sendMessage(`${event.name} has joined the channel`);
  }
}
