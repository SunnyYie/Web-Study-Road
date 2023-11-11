// 无法确定对象中有哪些属性
interface AnyObject {
  // [key: string]用来约束该接口中允许出现的属性名称，只要是string类型的属性名称，都可以出现在对象中
  [key: string]: number
}

let obj100: AnyObject = {
  a: 1,
  b: 2,
}

interface MyArray<T> {
  // [n: number]说明数组中可以有任意多个元素
  [n: number]: T
}

let arr00: MyArray<number> = [1, 3, 5]
