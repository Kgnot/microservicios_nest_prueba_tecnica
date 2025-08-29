import { Module } from '@nestjs/common';
import { HistoryTaskController } from './history-task.controller';
import { DatabaseModule } from '../database/database.module';
import { taskProviders } from '../schemas-providers/task.providers';
import { HistoryTaskService } from './task-history.service';

@Module({
  imports: [DatabaseModule],
  controllers: [HistoryTaskController],
  providers: [HistoryTaskService, ...taskProviders],
})
export class TaskHistoryModule {}
