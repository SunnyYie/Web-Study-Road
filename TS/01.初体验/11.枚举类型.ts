// 类似于字面量类型+联合类型
// 枚举名称和枚举中的值以大写字母开头
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// 数字枚举(有自增长) Down 11 Left 12 Right 13
enum Direction1 {
  Up = 10,
  Down,
  Left,
  Right,
}

// 字符串枚举(没有自增长)
// 每个值必须都要有初始值
enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

function changeDirection1(direction: Direction) {
  console.log(direction)
}

changeDirection1(Direction.Up) // 0

function changeDirection2(direction: Direction1) {
  console.log(direction)
}
changeDirection2(Direction1.Down) // 11

function changeDirection3(direction: Direction2) {
  console.log(direction)
}
changeDirection3(Direction2.Up) // Up

//枚举的原理：会被编译为JS代码
console.log(Direction);
