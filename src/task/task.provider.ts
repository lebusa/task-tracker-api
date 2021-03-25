import { Connection } from 'mongoose';
import { TaskSchema } from './schema/task.schema';

export const taskProviders = [
    {
        provide: 'TASK_MODEL',
        useFactory: (connection: Connection) => connection.model('Task', TaskSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];