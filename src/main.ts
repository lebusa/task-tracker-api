import { NestFactory,   } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';

const PORT = process.env.PORT || 3002;

async function bootstrap() {

  const app = await NestFactory.create(AppModule,);

  app.enableCors();

  app.use(morgan('tiny'));

  app.setGlobalPrefix('/api');

  await app.listen(
    PORT, 
    '0.0.0.0',
    () => {
      console.log(`Tasks Tracker Server running on port ${PORT}`);
    });
}
bootstrap();
