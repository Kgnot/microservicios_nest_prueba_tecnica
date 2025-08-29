import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './_config';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Main-getaway');

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  await app.listen(envs.port);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  logger.log('Running on port ', envs.port);
}

bootstrap();

// usamos nest g res task para generar un nuevo resource