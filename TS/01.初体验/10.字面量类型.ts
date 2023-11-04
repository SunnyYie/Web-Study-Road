let str1 = 'Hello JS'
// str2是常量，值不能变化，所以它的类型为：'Hello JS'
const str2 = 'Hello TS'

// 字面量类型
// 相当于把str3变为一个常量
let str3: 'Hello JS' = 'Hello JS'
let age4: 18 = 18

// 字面量类型和联合类型一起使用
// 表示一组明确的可选值列表
function changeDirection(direction: 'up' | 'down' | 'left' | 'right') {
  console.log(direction)
}

changeDirection('down')
