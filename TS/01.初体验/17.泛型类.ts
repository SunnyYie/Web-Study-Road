class GenericNumber<NumType> {
  constructor(value: NumType) {
    this.defaultValue = value
  }

  defaultValue: NumType
  add: (x: NumType, y: NumType) => NumType
}

// 此时可以不用写类型
const myNum = new GenericNumber(20)
myNum.defaultValue = 10

class GenericNumber1<NumType> {
  defaultValue: NumType
  add: (x: NumType, y: NumType) => NumType
}

// 这种情况下推荐指定类型
const myNum1 = new GenericNumber1<number>()
myNum.defaultValue = 10
