// 自定义类型
type CustomArray = (number | string)[]

let arr1: CustomArray = [1, 'a']
let arrr2: CustomArray = [2, 'b']

// 函数类型
// function add(num1: number, num2: number): number {
//   return num1 + num2
// }

// 单独 给参数和返回值加类型
const add = (num1: number, num2: number): number => {
  return num1 + num2
}
add(1, 2)

// 同时指定参数和返回值类型
const add2: (num1: number, num2: number) => number = (num1, num2) => {
  return num1 + num2
}
add2(3, 4)

// 没有返回值
function greet(name: string): void {
  console.log('Hello', name)
}
greet('sxc')

// 可选参数
function mySlice(start?: number, end?: number): void {
  console.log('起始索引', start, '结束索引', end)
}
mySlice(10)
mySlice(1, 3)
mySlice()
