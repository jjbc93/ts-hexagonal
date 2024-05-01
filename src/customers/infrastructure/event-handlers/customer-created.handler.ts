import { CustomerCreatedEvent } from '@customers/domain/events/customer-created';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OnEvent } from '@nestjs/event-emitter';
import { TelegramNotificationService } from 'src/infrastructure/notifications/telegram/telegram-notification.service';

@Injectable()
export class CustomerCreatedHandler {
  constructor(
    private readonly configService: ConfigService,
    private readonly telegramService: TelegramNotificationService,
  ) {}
  @OnEvent('customer.created')
  handleCustomerCreatedEvent(event: CustomerCreatedEvent): void {
    this.telegramService.sendMessage(`${event.name} has joined the channel`);
  }
}
