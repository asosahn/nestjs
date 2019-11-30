import { CreateUser } from './users/models/User';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('DOKTO')
    .setDescription('The DOKTO API description')
    .setVersion('1.0')
    .addTag('DOKTO')
    .build();
  const document = SwaggerModule.createDocument(app, options, {
  });
  SwaggerModule.setup('api', app, document);
  const UsersOptions = new DocumentBuilder()
    .setTitle('Users')
    .setDescription('The Users API description')
    .setVersion('1.0')
    .addTag('Users')
    .build();
  const documentUser = SwaggerModule.createDocument(app, UsersOptions, {
    include: [CreateUser],
  });
  SwaggerModule.setup('api/users', app, documentUser);


  await app.listen(3001);
}
bootstrap();
