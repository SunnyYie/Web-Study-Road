import { UserService } from './user/user.service'
import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly UserService: UserService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get()
  getUser(): string {
    return this.UserService.findAll()
  }
}
