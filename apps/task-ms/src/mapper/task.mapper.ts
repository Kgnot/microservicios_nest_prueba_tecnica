// import { TaskEntity } from '../entity/task.entity';
import { TaskDto } from '../dto/task-dto';
import { teamMapperToDto } from './team.adapter';
import { appUserMapperToDto } from './app-user.mapper';

export function taskMapperToDto(task: any): TaskDto {
  return {
    id: task.task_id,
    state: task.state_id,
    title: task.title,
    description: task.description,
    due_date: task.due_date,
    team: teamMapperToDto(task.team),
    user: appUserMapperToDto(task.app_user),
  };
}

export function taskArrayMapperToDto(tasks: any[]) {
  return tasks.map((task) => taskMapperToDto(task));
}
