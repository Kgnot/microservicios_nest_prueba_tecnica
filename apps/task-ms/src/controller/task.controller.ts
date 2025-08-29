import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from '../service/task.service';
import { UpdateTaskDto } from '../dto/specific/update-task';
import { CreateTaskDto } from '../dto/specific/create-task';
import { TaskDto } from '../dto/task-dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('task')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @MessagePattern({ cmd: 'find_all' })
  findAll() {
    return this.tasksService.findAll();
  }

  @MessagePattern({ cmd: 'find_one' })
  findOne(@Payload('id') id: number) {
    return this.tasksService.findOne(+id);
  }

  @MessagePattern({ cmd: 'create' })
  create(@Payload() createTaskDto: CreateTaskDto) {
    console.log(createTaskDto);

    return this.tasksService.create(createTaskDto);
  }

  @MessagePattern({ cmd: 'update' })
  update(@Payload() data: { id: number; updateTaskDto: UpdateTaskDto }) {
    return this.tasksService.update(+data.id, data.updateTaskDto);
  }
  @MessagePattern({ cmd: 'delete' })
  remove(@Payload('id') id: number) {
    return this.tasksService.remove(+id);
  }
}
