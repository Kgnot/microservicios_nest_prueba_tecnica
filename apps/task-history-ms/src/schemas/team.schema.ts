import mongoose from 'mongoose';

export const TeamSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: String,
});
