import { TeamEntity } from './team.entity';
import { AppUserEntity } from './app-user.entity';

export interface TaskEntity {
  task_id: number;
  state_id: string|null;
  team_id: number|null;
  user_id: number;
  title: string;
  description: string;
  due_date: string;
  team: TeamEntity;
  app_user: AppUserEntity;
}
