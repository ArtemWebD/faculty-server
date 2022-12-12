import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = await app.get<ConfigService>(ConfigService);
  const PORT = config.get<number>('PORT');

  app.enableCors();
  await app.listen(PORT);
}

bootstrap();
