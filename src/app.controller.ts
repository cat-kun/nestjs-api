import { Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';
// import { ApiTags } from '@nestjs/swagger';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('testPost')
  // post请求默认状态码201，其余请求状态码200，通过在方法声明上添加 @HttpCode(...) 注解来改变默认的状态码
  @HttpCode(200)
  testPost(): object {
    return this.appService.getPost();
  }
}
