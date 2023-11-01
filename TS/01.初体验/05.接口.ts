// 接口：只能为对象指定类型
interface IPerson {
  name: string
  age: number
  sayHi(): void
}
// 类型别名：可以为任意类型指定别名
type IIPerson = {
  name: string
  age: number
  sayHi(): void
}
type NumStr = number | string

let person1: IPerson = {
  name: 'jack',
  age: 20,
  sayHi() {
    console.log(person1.name, 'hello')
  },
}

let person2: IIPerson = {
  name: 'rose',
  age: 19,
  sayHi() {
    console.log(person2.name, 'hello,too')
  },
}

person1.sayHi()
person2.sayHi()
