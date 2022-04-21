import { Module } from '@nestjs/common';
import { HackController } from './getHack.controller';
import { HackService } from './getHack.service';

@Module({
  controllers: [HackController],
  providers: [HackService],
})
export class HackModule {}
