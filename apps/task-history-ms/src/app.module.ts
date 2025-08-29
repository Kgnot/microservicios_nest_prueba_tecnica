import { Module } from '@nestjs/common';
import { TaskHistoryModule } from './task-history/task-history.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [TaskHistoryModule, DatabaseModule],
})
export class AppModule {}
