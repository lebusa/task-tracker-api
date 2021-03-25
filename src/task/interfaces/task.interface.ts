import { Document } from 'mongoose';

export interface Task extends Document {
    readonly title: string;
    readonly reminder: boolean;
    readonly scheduledFor: string;
}
