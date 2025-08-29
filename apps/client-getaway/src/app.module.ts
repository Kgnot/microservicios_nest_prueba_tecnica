import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';
import { HistoryTaskModule } from './history-task/history-task.module';

@Module({
  imports: [TaskModule, AuthModule, HistoryTaskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
