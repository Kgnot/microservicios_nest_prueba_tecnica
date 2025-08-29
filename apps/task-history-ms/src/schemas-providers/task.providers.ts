import { Connection } from 'mongoose';
import { HistoryTaskSchema } from '../schemas/history-task.schema';
import { HISTORY_TASK_MODEL } from '../config';

export const taskProviders = [
  {
    provide: HISTORY_TASK_MODEL, // token
    useFactory: (connection: Connection) =>
      connection.model('Task', HistoryTaskSchema),
    inject: ['DATABASE_CONNECTION'], // previously defined connection
  },
];