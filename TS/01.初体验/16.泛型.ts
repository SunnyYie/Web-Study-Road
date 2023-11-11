function id<Type>(value: Type): Type {
  return value
}

const num100 = id<number>(10)
const str100 = id<string>('a')

// 简化写法
const num1 = id(20)
const str11 = id('b')

// 添加约束方式1
function index<Type>(value: Type[]): Type[] {
  return value
}
const arr1000 = index([1, 2, 3])

// 方式2
interface ILength {
  length: number
}
function id2<Type extends ILength>(value: Type): Type {
  console.log(value.length)

  return value
}
id2([1, 2, 3])
id2({ name: 'jack', length: 10 })
// 错误演示
// id2(123)

// 多个泛型变量
// keyof接收一个对象类型，生成其键名称的联合类型
function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key]
}

getProp({ name: 'jack', age: 18 }, 'age')
getProp({ name: 'jack', age: 18 }, 'name')
getProp(18, 'toFixed')
getProp('str', 'toString')
getProp('str', 1) // 1表示索引
getProp(['a'], length)
getProp(['a'],1000)


// 泛型接口
interface IdFunc<Type> {
  id2: (value: Type) => Type
  ids: () => Type[]
}

let obj111: IdFunc<number> = {
  id2(value) {
    return value
  },
  ids() {
    return [1, 3, 5]
  },
}

// 数组在ts中就是一个泛型接口
const str1000 = ['a', 'b', 'c']
str1000.forEach((item) => {})

const arr11 = [1, 2, 3]
arr11.forEach((item) => {})
