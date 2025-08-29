import { Module } from '@nestjs/common';
import { TasksController } from './controller/task.controller';
import { TasksService } from './service/task.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [TasksController],
  providers: [TasksService, PrismaService],
})
export class TaskServiceModule {}
