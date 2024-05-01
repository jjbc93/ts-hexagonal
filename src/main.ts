import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  const configService = app.get(ConfigService);
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The customers Api')
    .setVersion('1.0')
    .addTag('ts-ddd')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = configService.get('APP_PORT', 3000);
  await app.listen(port);
}
bootstrap();
