// ?：声明属性为可选属性 ，|：声明属性类型允许为多种类型

interface HomeWork {
  id?: string | number | null
  name: string
  createTime?: number
}

// Id属性为Homework类型必选提供的属性
const homework: HomeWork = { name: 'sxc' }

// as断言约束
// 断言无法约束对象包含其他属性,但使用时仅能使用断言类型中声明的属性无法使用title属性
const homework2 = { id: 5, name: 'web', title: 'zbc' } as HomeWork

// 非空断言操作符：!
function sayHello(name: string | undefined) {
  // 断言值存在使TS放弃类型检测
  let sname: string = name!
  console.log(sname)
}

interface User {
  address: string
  name: string
}

// 空值合并运算符`??`
// 左侧不为null or undefined时执行并返回，否则执行返回右侧
let user = { name: 'sxc', address: { detail: '1' } }
let detail = user?.address?.detail ?? '不存在'
