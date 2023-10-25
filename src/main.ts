import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { getEnvPath } from './common/helper/env.helper';
const path = require('path');

const dirPath = path.join(__dirname, '../src/common/helper/envs');
const envFilePath: string = getEnvPath(dirPath);
dotenv.config({ path: envFilePath });

const { PORT } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('User CRUD Operations')
    .setDescription('The User API description')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'JWT',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();

  await app.listen(PORT);
  console.log(`App listening on port ${PORT}`);
}
bootstrap();
