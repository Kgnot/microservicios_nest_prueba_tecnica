import mongoose from 'mongoose';
import { TaskSchema } from './task.schema';

export const HistoryTaskSchema = new mongoose.Schema({
  taskId: { type: Number, required: true }, //
  userId: { type: Number, required: true }, // which user do that
  action: { type: String, required: true }, // edit, created?
  timestamp: { type: Date, default: Date.now }, // the timestamp where this was be saved
  //
  task: TaskSchema,
});
