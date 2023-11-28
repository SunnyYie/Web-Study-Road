import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { VersioningType } from '@nestjs/common'
import * as session from 'express-session'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  // 开启版本控制
  app.enableVersioning({
    type: VersioningType.URI,
  })
  app.use(session({ secret: 'SXC', rolling: true, name: 'sxc.sid', cookie: { maxAge: 999999 } }))
  await app.listen(3000)
}
bootstrap()
