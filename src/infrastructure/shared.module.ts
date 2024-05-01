import { Global, Module } from '@nestjs/common';
import { TelegramNotificationService } from './notifications/telegram/telegram-notification.service';

@Global()
@Module({
  providers: [TelegramNotificationService],
  exports: [TelegramNotificationService],
})
export class SharedModule {}
