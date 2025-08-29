import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { HISTORY_TASK_SERVICE } from '../_config';
import { ClientProxy } from '@nestjs/microservices';
import { CreateHistoryTaskDto } from './dto/history-task.dto';

@Controller('history-task')
export class HistoryTaskController {
  constructor(
    @Inject(HISTORY_TASK_SERVICE)
    private readonly historyTaskClient: ClientProxy,
  ) {}

  @Get()
  async getAllHistory() {
    return this.historyTaskClient.send({ cmd: 'find_all' }, {});
  }

  @Post()
  async create(@Body() dto: CreateHistoryTaskDto) {
    return this.historyTaskClient.send({ cmd: 'create_log' }, dto);
  }

  @Get(':taskId')
  async getHistory(@Param('taskId') taskId: number) {
    return this.historyTaskClient.send({ cmd: 'create_log' }, taskId);
  }
}
