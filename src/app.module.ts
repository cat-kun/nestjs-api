import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HackModule } from './getHack/getHack.module';

@Module({
  imports: [HackModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
