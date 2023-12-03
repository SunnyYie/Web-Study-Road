import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // 变为共享模块
})
export class UserModule {}
