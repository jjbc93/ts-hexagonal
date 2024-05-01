import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CustomersModule } from './customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CustomerEntity } from '@customers/domain/customer.entity.orm';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { SharedModule } from './infrastructure/shared.module';
import { TelegrafModule } from 'nestjs-telegraf';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'database',
      port: 5432,
      username: 'myuser',
      password: 'mypassword',
      database: 'mydatabase',
      entities: [CustomerEntity],
      synchronize: true,
    }),
    TelegrafModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        token: configService.get<string>('TELEGRAM_BOT_TOKEN'),
      }),
    }),
    SharedModule,
    CustomersModule,
    EventEmitterModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dateSource: DataSource) {}
}
