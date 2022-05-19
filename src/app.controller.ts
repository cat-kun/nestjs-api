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
  @Post('testPost')
  testPost(): object {
    return this.appService.getPost();
  }
}
