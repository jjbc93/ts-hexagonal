import { TelegramNotificationPort } from '@shared/domain/ports/telegram-notification.port';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectBot } from 'nestjs-telegraf';
import { Telegraf } from 'telegraf';

@Injectable()
export class TelegramNotificationAdapterService
  implements TelegramNotificationPort
{
  constructor(
    private readonly configService: ConfigService,
    @InjectBot() private readonly bot: Telegraf,
  ) {}

  public async sendMessage(message: string): Promise<void> {
    const group = this.configService.get<string>('TELEGRAM_GROUP_ID');
    Logger.debug(`Enviando mensaje grupal ${group}`);
    this.bot.telegram.sendMessage(group, message);
  }
}
