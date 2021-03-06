import { CreateUser } from './users/models/User';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('NEST')
    .setDescription('The NEST API description')
    .setVersion('1.0')
    .addTag('NEST')
    .build();
  const document = SwaggerModule.createDocument(app, options, {
  });
  SwaggerModule.setup('api', app, document);
  await app.listen(3001);
  console.log('PORT 3000');
}
bootstrap();
