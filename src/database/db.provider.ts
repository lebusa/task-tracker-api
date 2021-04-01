import * as mongoose from 'mongoose';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (): Promise<typeof mongoose> =>
        await mongoose.connect('mongodb://localhost/tasks', { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }),
    },
];
