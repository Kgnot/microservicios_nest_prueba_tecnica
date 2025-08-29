import { TaskDto } from './task-dto';

export class CreateHistoryTaskDto {
  // id: number;
  taskId: number;
  userId: number;
  action: string;
  task: TaskDto;
}
