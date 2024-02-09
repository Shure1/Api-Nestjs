import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /* app.setGlobalPrefix("api/v1");

  /* decimos que de forma global haga las validaciones de los datos de entrada,
  ademas transforma automaticamente los datos siempre y cuando pueda para no parsear en el servicio */
  /* app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );  */
  await app.listen(3000);
}
bootstrap();
