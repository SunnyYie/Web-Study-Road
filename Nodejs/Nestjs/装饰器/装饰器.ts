/** 类装饰器 */
const doc: ClassDecorator = (target: any) => {
  target.prototype.name = 'sxy'
  console.log(target)
}

/** 属性装饰器 */
const pDoc: PropertyDecorator = (target: any, key: string | symbol) => {
  console.log(target, key)
}

/** 方法装饰器 */
const mDoc: MethodDecorator = (target: any, key: string | symbol, descriptor: any) => {
  console.log(target, key, descriptor)
}

/** 参数装饰器 */
const paramDoc: ParameterDecorator = (target: any, key: string | symbol | undefined, index: number) => {
  console.log(target, key, index)
}

// 装饰器的使用，相当于doc(SXC)
// 作用：不破坏类内部结构，在此基础上添加属性
@doc
class SXC {
  constructor() {}
}

// class SXY {
//   @pDoc
//   public name: string
//   constructor() {
//     this.name = 'xxy'
//   }

//   @mDoc
//   getName() {
//     return this.name
//   }

//   setName(@paramDoc name: string) {
//     this.name = name
//   }
// }

const sxc: any = new SXC()

console.log(sxc.name)
