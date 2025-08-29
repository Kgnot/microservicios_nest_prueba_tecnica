import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Put,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { TASK_SERVICE } from '../_config';
import { ClientProxy } from '@nestjs/microservices';
import { CreateTaskDto } from './dto/create-task';
import { UpdateTaskDto } from './dto/update-task';
import { AuthGuard } from '../auth-guard/auth-guard';

@Controller('task')
@UseGuards(AuthGuard)
export class TaskController {
  constructor(
    @Inject(TASK_SERVICE)
    private readonly taskClient: ClientProxy,
  ) {}

  @Get()
  findAll(@Request() req) {
    return this.taskClient.send({ cmd: 'find_all' }, {});
  }

  @UseGuards(AuthGuard)

  @Get(':id')
  findOne(@Param('id') id: number, @Request() req) {
    return this.taskClient.send({ cmd: 'find_one' }, { id: id });
  }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createTaskDto: CreateTaskDto, @Request() req) {
    return this.taskClient.send({ cmd: 'create' }, createTaskDto);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto, @Request() req) {
    return this.taskClient.send(
      { cmd: 'update' },
      { id: id, updateTaskDto: updateTaskDto },
    );
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  delete(@Param('id') id: number, @Request() req) {
    return this.taskClient.send({ cmd: 'delete' }, { id: id });
  }
}
