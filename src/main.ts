import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {logger: ['log', 'error', 'warn', 'debug', 'verbose'],});

  app.enableCors();

  app.setGlobalPrefix('/api');

  await app.listen(
    PORT, 
    () => {
      console.log(`Server running on port ${PORT}`);
    });
}
bootstrap();
