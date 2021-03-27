import { NestFactory,   } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';

const PORT = 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule,);

  app.enableCors();

  app.use(morgan('dev'));

  app.setGlobalPrefix('/api');

  await app.listen(
    PORT, 
    '0.0.0.0',
    () => {
      console.log(`Server running on port ${PORT}`);
    });
}
bootstrap();
