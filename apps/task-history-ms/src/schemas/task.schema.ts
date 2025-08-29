import mongoose from 'mongoose';
import { TeamSchema } from './team.schema';
import { AppUserSchema } from './app-user.schema';

export const TaskSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  state: { type: String, required: true },
  team: TeamSchema,
  user: AppUserSchema,
  title: String,
  description: String,
  due_date: Date,
});
