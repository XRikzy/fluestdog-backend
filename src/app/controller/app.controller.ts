import { Controller, Get } from '@nestjs/common';
import { AppService } from '../service/app.service';
import { Public } from 'src/decorator/decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
