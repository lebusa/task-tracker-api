import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    reminder: { type: Boolean, required: true },
    scheduledFor: { type: Date, default: Date.now, required: true },
});
