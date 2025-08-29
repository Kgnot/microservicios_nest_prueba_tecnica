import * as mongoose from 'mongoose';
import { envs } from '../config';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(envs.databaseUrl),
  },
];
