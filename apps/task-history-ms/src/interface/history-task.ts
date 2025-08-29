import { Document } from 'mongoose';
import { TaskDto } from '../dto/task-dto';

export interface HistoryTask extends Document {
  readonly taskId: number;
  readonly userId: number;
  readonly action: string;
  readonly timestamp: Date;
  // add
  readonly task: TaskDto;
}
