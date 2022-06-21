import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/*
  Here we can define some routing for our app.
  E.g. 'app', means we have to route though localhost:3000/app
  in order to hit the getHello() method.

  We can take this a step further and set a path wtihin the @Get().
  E.g. if we added @Get('/bob') we would have to route though localhost:3000/app/bob
  to access the getHello() method.
*/
@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // degates to service to do the actual work
    return this.appService.getHello();
  }
}
