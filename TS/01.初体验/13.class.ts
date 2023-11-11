class Person {
  age: number
  gender: string
  x = 1
  y = 2
  // 构造函数
  constructor(age: number, gender: string) {
    this.age = age
    this.gender = gender
  }

  // 实例方法
  scale(n: number) {
    this.x *= n
    this.y *= n
  }
}

const p1 = new Person(19, '男')
console.log(p1.age, p1.gender)

const p2 = new Person(20, 'man')
p2.scale(10)
console.log(p2.x, p2.y)

class Animal {
  public move() {
    console.log('Moving')
  }
  protected run() {
    this.jump()
    console.log('Running')
  }
  private jump() {
    console.log('Jumping')
  }
}
const animal = new Animal()
animal.move()
// animal.run()
// animal.jump()

// 类的继承方式1
class Dog extends Animal {
  bark() {
    console.log('汪')
    this.move()
    this.run()
    // this.jump()
  }
}

const dog = new Dog()
dog.move()
// dog.run()
// dog.jump()

// 类的继承方式2
interface Singable {
  sing(): void
}
class Sing implements Singable {
  sing(): void {
    console.log('真不错')
  }
}

let s100 = new Sing()
s100.sing()

class Person1 {
  // 只读修饰符
  readonly age: number = 18
  constructor(age: number) {
    this.age = age
  }
  setAge() {
    // 错误演示
    // this.age = 20
  }
}

// 在接口中使用
interface IPerson {
  readonly name: string
}

let obj1: IPerson = {
  name: 'jack',
}
// obj1.name = 'rose'

// 直接使用
let object: { readonly name: string } = {
  name: 'jack',
}
// object.name = 'rose'
