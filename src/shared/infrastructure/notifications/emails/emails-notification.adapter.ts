import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger } from '@nestjs/common';
import { EmailConfigParams } from '@shared/domain/email-config';
import { EmailNotificationPort } from '@shared/domain/ports/email-notification.port';

@Injectable()
export class EmailNotificationAdapterService implements EmailNotificationPort {
  constructor(
    private readonly params: EmailConfigParams,
    private readonly mailerService: MailerService,
  ) {}

  public async sendMessage(
    text: string,
    to: string[],
    subject: string,
  ): Promise<void> {
    Logger.debug(`Send email  ${to}`);
    this.mailerService.sendMail({
      to,
      from: this.params.from,
      subject: `${this.params.subject}: ${subject}`,
      text,
    });
  }
}
