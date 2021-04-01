import * as mongoose from 'mongoose';

const HOST = 'localhost'; // change to this to an appropriate host

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (): Promise<typeof mongoose> =>
        await mongoose.connect(`mongodb://${HOST}/tasks`, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }),
    },
];
