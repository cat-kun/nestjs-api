import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
// import { ApiTags } from '@nestjs/swagger';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // 1. 固定路径：
  // 可以匹配到 get请求，http://localhost:3000/api/hack
  @Get('api/getHack')
  // @Post('hack')
  // @ApiTags('用户')
  hack(): object {
    return this.appService.getHack();
  }
}
