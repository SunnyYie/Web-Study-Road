import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  // Request,
  Query,
  Headers,
  HttpCode,
  Req,
  Res,
  Session,
} from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import * as svgCaptcha from 'svg-captcha'

// 版本控制
@Controller({
  path: 'user',
  version: '1',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Get()
  // findName(@Request() req) {
  //   console.log(req.query);
  //   return {
  //     code: 200,
  //     message: req.query.name,
  //   };
  // }

  @Get('code')
  createCode(@Req() req, @Res() res, @Session() session) {
    const Captcha = svgCaptcha.create({
      size: 4, // 生成四个验证码,
      fontSize: 50,
      width: 100,
      height: 34,
      background: '#cc9966',
    })

    session.code = Captcha.text
    res.type('image/svg+xml')
    res.send(Captcha.data)
  }

  @Post('create')
  createUser(@Body() Body, @Session() session) {
    console.log(Body)
    if (session.code.toLocaleLowerCase() === Body?.code?.toLocaleLowerCase()) {
      return {
        code: 200,
        message: '验证码正确',
      }
    } else {
      return {
        code: 400,
        message: '验证码错误',
      }
    }
  }

  @Get()
  findQuery(@Query() query) {
    console.log(query)
    return {
      code: 200,
      message: query.name,
    }
  }

  @Post()
  // 可以直接在@Body中传入想要拿到的字段数据
  create(@Body('age') createUserDto: CreateUserDto) {
    console.log(createUserDto)

    return this.userService.create(createUserDto)
  }

  @Get()
  findAll() {
    return this.userService.findAll()
  }

  @Get(':id')
  @HttpCode(304)
  findOne(@Param('id') id: string, @Headers() headers) {
    console.log(id, headers)

    return this.userService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id)
  }
}
