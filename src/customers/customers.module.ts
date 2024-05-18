import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersFindController } from '@customers/presentation/find/customers-find.controller';
import { FindCustomerUseCase } from '@customers/use-cases/find/find-customers.use-case';
import { CustomerRepositoryOrmAdapter } from '@customers/infrastructure/storage/orm/customer.orm.entity.adapter';
import { CustomerEntity } from './infrastructure/storage/orm/customer.entity.orm';
import { CreateCustomerUseCase } from './use-cases/create/create-customer.use-case';
import { CustomersCreateController } from './presentation/create/customers-create.controller';
import { CustomerCreatedHandler } from './infrastructure/event-handlers/customer-created.handler';
import { CustomerRepositoryPort } from './domain/ports/customer-repository.port';
import { UpdateCustomerUseCase } from './use-cases/update/create/update-customer.use-case';
import { CustomersUpdateController } from './presentation/update/customers-update.controller';
import { FindOneCustomerUseCase } from './use-cases/find-one/find-customers.use-case';
import { CustomersFindOneController } from './presentation/find-one/customers-find-one.controller';
import { EmailNotificationPort } from '@shared/domain/ports/email-notification.port';
import { ConfigService } from '@nestjs/config';
import { MailerService } from '@nestjs-modules/mailer';
import { EmailNotificationAdapterService } from '@shared/infrastructure/notifications/emails/emails-notification.adapter';
import { EmailConfigParams } from '@shared/domain/email-config';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity])],
  controllers: [
    CustomersFindController,
    CustomersCreateController,
    CustomersUpdateController,
    CustomersFindOneController,
  ],
  providers: [
    {
      provide: CustomerRepositoryPort,
      useClass: CustomerRepositoryOrmAdapter,
    },
    FindCustomerUseCase,
    CreateCustomerUseCase,
    CustomerCreatedHandler,
    UpdateCustomerUseCase,
    FindOneCustomerUseCase,
    {
      provide: EmailNotificationPort,
      useFactory: async (
        configService: ConfigService,
        mailerService: MailerService,
      ) => {
        const config: EmailConfigParams = {
          from: configService.get<string>('EMAIL_FROM'),
          subject: configService.get<string>('EMAIL_SUBJECT_CUSTOMER'),
        };
        return new EmailNotificationAdapterService(config, mailerService);
      },
      inject: [ConfigService, MailerService],
    },
  ],
})
export class CustomersModule {}
