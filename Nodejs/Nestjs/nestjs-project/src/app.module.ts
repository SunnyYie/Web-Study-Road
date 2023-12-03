import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'

// 注册全局模块
import { ConfigModule } from './config/config.module'

// 连接数据库
import { TypeOrmModule } from '@nestjs/typeorm'
import { TestModule } from './test/test.module';

@Module({
  imports: [
    UserModule,
    ConfigModule,
    ConfigModule.forRoot({ path: '/sxc' }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'test-db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // 实体文件
      synchronize: true, // 自动将实体类同步到数据库
      retryDelay: 500, // 重试连接数据库间隔
      retryAttempts: 10, // 重试连接数据库的次数
      autoLoadEntities: true,
    }),
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
