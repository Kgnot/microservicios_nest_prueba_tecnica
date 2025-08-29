import mongoose from 'mongoose';

export const AppUserSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: String,
  role: String,
});
