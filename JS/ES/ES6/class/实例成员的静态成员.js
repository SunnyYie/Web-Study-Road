// 语义差别：实例成员:附着在实例上，静态成员:与某个实例无关，与该对象有关

// 内存差别：实例成员：实例+原型上的成员。静态成员：附着在类上面
// Rabbit 创建了两个实例，两个实例的隐式原型指向jumo，Rabbit的原型指向jump

class Rabbit {
  furColor
  age
  nickname
  static total = 0

  constructor(furColor, age, nickname) {
    this.furColor = furColor
    this.age = age
    this.nickname = nickname
    Rabbit.total++
  }

  jump() {
    console.log(`jump: ${this.nickname}`)
  }
}

const r1 = new Rabbit('white', 1, 'Rabbit1')
const r2 = new Rabbit('black', 2, 'Rabbit2')

r1.jump()

console.log(Rabbit.total)
