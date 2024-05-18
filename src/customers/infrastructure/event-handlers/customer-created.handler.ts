import {
  CustomerCreated,
  CustomerCreatedEvent,
} from '@customers/domain/events/customer-created';
import { Inject, Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { EmailNotificationPort } from '@shared/domain/ports/email-notification.port';
import { TelegramNotificationPort } from '@shared/domain/ports/telegram-notification.port';

@Injectable()
export class CustomerCreatedHandler {
  constructor(
    @Inject(TelegramNotificationPort)
    private readonly telegramService: TelegramNotificationPort,
    @Inject(EmailNotificationPort)
    private readonly emailNotificationPort: EmailNotificationPort,
  ) {}
  @OnEvent(CustomerCreated)
  handleCustomerCreatedEvent(event: CustomerCreatedEvent): void {
    this.telegramService.sendMessage(`${event.name} has joined the channel`);
    this.emailNotificationPort.sendMessage(
      `Welcome ${event.name}`,
      ['codely-test@mailinator.com', 'codely-developer@mailinator.com'],
      'New User',
    );
  }
}
