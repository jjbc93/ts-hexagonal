import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersFindController } from '@customers/presentation/find/customers-find.controller';
import { FindCustomerUseCase } from '@customers/use-cases/find/find-customers.use-case';
import { CustomerRepositoryMongoAdapter } from '@customers/infrastructure/storage/orm/mongo/customer.orm.entity.adapter';
import { CustomerEntity } from './domain/customer.entity.orm';
import { CreateCustomerUseCase } from './use-cases/create/create-customer.use-case';
import { CustomersCreateController } from './presentation/create/customers-create.controller';
import { CustomerCreatedHandler } from './infrastructure/event-handlers/customer-created.handler';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity])],
  controllers: [CustomersFindController, CustomersCreateController],
  providers: [
    FindCustomerUseCase,
    CreateCustomerUseCase,
    {
      provide: 'CustomerRepositoryPort',
      useClass: CustomerRepositoryMongoAdapter,
    },
    CustomerCreatedHandler,
  ],
})
export class CustomersModule {}
