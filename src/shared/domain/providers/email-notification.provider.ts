import { MailerService } from '@nestjs-modules/mailer';
import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EmailNotificationAdapterService } from '@shared/infrastructure/notifications/emails/emails-notification.adapter';
import { EmailNotificationPort } from '../ports/email-notification.port';
import { EmailConfigParams } from '../email-config';

export const EmailNotificationProvider: Provider = {
  provide: EmailNotificationPort,
  useFactory: async (
    configService: ConfigService,
    mailerService: MailerService,
  ) => {
    const config: EmailConfigParams = {
      from: configService.get<string>('EMAIL_FROM'),
      subject: configService.get<string>('EMAIL_SUBJECT') ?? 'Default',
    };
    return new EmailNotificationAdapterService(config, mailerService);
  },
  inject: [ConfigService, MailerService],
};
