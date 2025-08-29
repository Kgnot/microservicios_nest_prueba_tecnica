import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateHistoryTaskDto } from '../dto/history-task.dto';
import { HistoryTaskService } from './task-history.service';
import { MessagePattern, Payload } from '@nestjs/microservices';


@Controller('history-task')
export class HistoryTaskController {
  constructor(private readonly historyService: HistoryTaskService) {
  }


  @MessagePattern({cmd: 'find_all'})
  async getAllHistory() {
    return this.historyService.getAllHistory();
  }
  @MessagePattern({cmd: 'create_log'})
  async create(@Payload() dto: CreateHistoryTaskDto) {
    return this.historyService.createLog(dto);
  }

  @MessagePattern({cmd: 'get_history_by_task'})
  async getHistory(@Payload('taskId') taskId: number) {
    return this.historyService.getHistoryByTask(taskId);
  }


}