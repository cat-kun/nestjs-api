import { Controller, Get, Post, Query } from '@nestjs/common';
import { HackService } from './getHack.service';

@Controller('getHack')
export class HackController {
  constructor(private readonly hackService: HackService) {}

  // 1. 固定路径：
  // 可以匹配到 get请求，http://localhost:3000/api/getHack
  @Get()
  addData(@Query() query): object {
    console.log(query);
    const { hack } = query;

    if (hack === '1') {
      return this.hackService.getHack2();
    } else {
      return this.hackService.getHack();
    }
  }

}
