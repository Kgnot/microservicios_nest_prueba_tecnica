import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AUTH_SERVICE, envs, TASK_SERVICE } from '../_config';

@Module({
  controllers: [TaskController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: TASK_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.tasksMicroserviceHost,
          port: envs.tasksMicroservicePort,
        },
      },
      {
        name: AUTH_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.authMicroserviceHost,
          port: envs.authMicroservicePort,
        },
      },
    ]),
  ],
})
export class TaskModule {}
