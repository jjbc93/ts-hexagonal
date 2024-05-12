import { Global, Module } from '@nestjs/common';
import { TelegramNotificationAdapterService } from './notifications/telegram/telegram-notification.adapter';
import { TelegramNotificationPort } from '@shared/domain/ports/telegram-notification.port';

@Global()
@Module({
  providers: [
    {
      provide: TelegramNotificationPort,
      useClass: TelegramNotificationAdapterService,
    },
  ],
  exports: [TelegramNotificationPort],
})
export class SharedModule {}
