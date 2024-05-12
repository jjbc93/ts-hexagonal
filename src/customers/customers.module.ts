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

@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity])],
  controllers: [
    CustomersFindController,
    CustomersCreateController,
    CustomersUpdateController,
  ],
  providers: [
    FindCustomerUseCase,
    CreateCustomerUseCase,
    {
      provide: CustomerRepositoryPort,
      useClass: CustomerRepositoryOrmAdapter,
    },
    CustomerCreatedHandler,
    UpdateCustomerUseCase,
  ],
})
export class CustomersModule {}
