import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const HTTP_PORT = configService.get('app-config.HTTP_PORT');
  await app.listen(HTTP_PORT);
}
bootstrap();
