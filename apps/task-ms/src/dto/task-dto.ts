import { TeamDto } from './team-dto';
import { AppUserDto } from './app-user-dto';

export class TaskDto {
  id: number;
  state: string;
  team: TeamDto;
  user: AppUserDto;
  title: string;
  description: string;
  due_date: string; //string por comodidad todo
}
