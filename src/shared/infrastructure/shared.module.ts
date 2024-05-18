import { Global, Module } from '@nestjs/common';
import { TelegramNotificationAdapterService } from './notifications/telegram/telegram-notification.adapter';
import { TelegramNotificationPort } from '@shared/domain/ports/telegram-notification.port';
import { EmailNotificationProvider } from '@shared/domain/providers/email-notification.provider';
import { EmailNotificationPort } from '@shared/domain/ports/email-notification.port';
import { EventEmitAdapterService } from './notifications/events/event-emit.adapter';

@Global()
@Module({
  providers: [
    {
      provide: TelegramNotificationPort,
      useClass: TelegramNotificationAdapterService,
    },
    EmailNotificationProvider,
    EventEmitAdapterService,
  ],
  exports: [
    TelegramNotificationPort,
    EmailNotificationPort,
    EventEmitAdapterService,
  ],
})
export class SharedModule {}
