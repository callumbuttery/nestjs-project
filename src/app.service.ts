import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // does logic and returns it
  getHello(): string {
    return 'Hello World!';
  }
}
