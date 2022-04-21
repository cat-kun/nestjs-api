import { Injectable } from '@nestjs/common';

@Injectable()
export class HackService {
  time: any = new Date().getTime();

  getHack(): object {
    return {
      code: 200,
      data: {
        time: this.time,
        hack: false,
      },
    };
  }

  getHack2(): object {
    return {
      code: 200,
      data: {
        time: this.time,
        hack: true,
      },
    };
  }
}
