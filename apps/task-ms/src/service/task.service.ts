import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { taskArrayMapperToDto, taskMapperToDto } from '../mapper/task.mapper';
import { CreateTaskDto } from '../dto/specific/create-task';
import { UpdateTaskDto } from '../dto/specific/update-task';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const results = this.prisma.task
      .findMany({
        include: {
          team: true,
          app_user: true,
          task_state: true,
        },
      })
      .then(taskArrayMapperToDto);
    return results;
  }

  findOne(id: number) {
    const results = this.prisma.task
      .findUnique({
        where: {
          task_id: id,
        },
        include: {
          team: true,
          app_user: true,
          task_state: true,
        },
      })
      .then(taskMapperToDto);
    if (!results) throw new Error('Task not found');

    return results;
  }

  create(task: CreateTaskDto) {
    return this.prisma.task.create({
      data: task,
    });
  }

  update(id: number, updateTask: UpdateTaskDto) {
    return this.prisma.task.update({
      where: {
        task_id: id,
      },
      data: updateTask,
    });
  }

  remove(id: number) {
    return this.prisma.task.delete({
      where: {
        task_id: id,
      },
    });
  }
}
