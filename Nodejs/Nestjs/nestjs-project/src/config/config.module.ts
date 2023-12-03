import { DynamicModule, Global, Module } from '@nestjs/common'

@Global()
@Module({
  providers: [
    {
      provide: 'config',
      useValue: { baseUrl: '/api' },
    },
  ],
  exports: [
    {
      provide: 'config',
      useValue: { baseUrl: '/api' },
    },
  ],
})
export class ConfigModule {
  // 动态模块
  static forRoot(option: any): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: 'config',
          useValue: { baseUrl: '/api' + option.path },
        },
      ],
      exports: [
        {
          provide: 'config',
          useValue: { baseUrl: '/api' + option.path },
        },
      ],
    }
  }
}
