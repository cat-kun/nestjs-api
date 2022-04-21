import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 接口文档
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api'); // 设置全局路由前缀

  const options = new DocumentBuilder()
    .setTitle('nest后台API')
    .setDescription('供后台管理界面调用的服务端API')
    .setVersion('1.0')
    // .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(14542);
}
bootstrap();
