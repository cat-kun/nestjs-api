import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getPost(): object {
    return {
      code: 200,
      data: {
        time: new Date().getTime(),
      },
    };
  }
}
