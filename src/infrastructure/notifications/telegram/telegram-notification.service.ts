import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectBot } from 'nestjs-telegraf';
import { Telegraf } from 'telegraf';

@Injectable()
export class TelegramNotificationService {
  constructor(
    private readonly configService: ConfigService,
    @InjectBot() private readonly bot: Telegraf,
  ) {}

  public async sendMessage(message: string) {
    const group = this.configService.get<string>('TELEGRAM_GROUP_ID');
    Logger.debug(`Enviando mensaje grupal ${group}`);
    this.bot.telegram.sendMessage(group, message);
  }
}
