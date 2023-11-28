1.安装 nestjs cli
npm i @nestjs/cli
启动：npm run start:dev 
2.常用命令
nest --help
// 生成 controller
nest g co demo
// 生成 service
nest g s demo
// 生成 module
nest g mo demo

// 快速生成 CURD 模板
nest g resource user

2.RESTful 风格设计
(1)接口 url
RESTful 风格一个接口就会完成 增删改查 通过不同的请求方式来区分
http://localhost:3000/get_list/1
(2)版本控制
main.ts
app.enableVersioning({
  type: VersioningType.URI,
});
user.controller.ts
@Controller({
  path: 'user',
  version: '1',
})
(3)code码
200 ok
304 协商缓存
400 参数错误
401 token 错误
403 验证失败
404 接口不存在
500 服务端错误
502 网关错误

3.nestjs控制器
