import { NestFactory } from '@nestjs/core';
import { TaskServiceModule } from './task-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { envs } from './config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger();
  // initialize like a microservice
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    TaskServiceModule,
    {
      transport: Transport.TCP,
      options: {
        port: envs.port,
      },
    },
  );
  await app.listen();

  logger.log('Running on port: ', envs.port);
}

bootstrap();

// para correr: npm run start:dev <nombre>