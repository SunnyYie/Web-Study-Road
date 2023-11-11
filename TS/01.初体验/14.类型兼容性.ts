let arr0000 = ['a', 'b', 'c']
arr.forEach((item) => {})

// ts遵循结构化类型系统 即y的成员至少与x相同，则x兼容y
class Point {
  x: number
  y: number
}
class Point2D {
  x: number
  y: number
}
class Point3D {
  x: number
  y: number
  z: number
}

const p12: Point = new Point2D()
// Point兼容Point3D
const p30: Point = new Point3D()

// 接口兼容性
interface Point {
  x: number
  y: number
}

interface Point2D {
  x: number
  y: number
}
interface Point3D {
  x: number
  y: number
  z: number
}
let p11: Point = { x: 1, y: 1 }
let p22: Point2D = { x: 2, y: 2 }
let p33: Point3D = { x: 3, y: 3, z: 3 }

p11 = p22
p22 = p11
p11 = p33
// 属性少的不能赋值给属性多的
// p33 = p11

// 函数兼容性
// 1.参数个数
type F1 = (a: number) => void
type F2 = (a: number, b: number) => void

let f1: F1 = function (a) {}
let f2: F2 = function (a, b) {}
// 参数少的可以赋值给参数多的
f2 = f1

// 2.参数类型
type F3 = (a: number) => void
type F4 = (a: string) => void

let f3: F3 = function (a) {}
let f4: F4 = function (a) {}
// f3 = f4
// f4 = f3

// 当参数类型为对象类型
type F5 = (a: Point2D) => void
type F6 = (a: Point3D) => void

let f5: F5 = function ({ x: a, y: b }) {}
let f6: F6 = function ({ x: a, y: b, z: c }) {}
// 把对象属性看作参数，F6参数多，所以f5可以赋值给f6
f6 = f5
// f5 = f6

// 3.返回值
// 多的给少的赋值
type F7 = () => { name: string }
type F8 = () => { name: string; age: number }

let f7: F7 = function () {
  return { name: 'sy' }
}
let f8: F8 = function () {
  return { name: 'sxc', age: 18 }
}
f7 = f8
// f8 = f7
