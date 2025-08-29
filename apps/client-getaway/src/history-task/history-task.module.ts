import { Module } from '@nestjs/common';
import { HistoryTaskController } from './history-task.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AUTH_SERVICE, envs, HISTORY_TASK_SERVICE } from '../_config';

@Module({
  controllers: [HistoryTaskController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: HISTORY_TASK_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.historyTaskMicroserviceHost,
          port: envs.historyTaskMicroservicePort,
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
export class HistoryTaskModule {}
