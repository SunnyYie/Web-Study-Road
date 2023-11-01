// 类型注解
// let age:number = 18

// 类型检查机制
// age = '20'
// age.toFixed()

// 原始类型
let age: number = 18
let str: string = '孙小厨'
let bool: boolean = false
let a: null = null
let a1: undefined = undefined
let s: symbol = Symbol()

// 数组类型
let arr: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]
let strArr: Array<String> = ['a', 'b', 'c']
let b: boolean[] = [true, false]

// 联合类型
// 既有number又有string
let arr3: (number | string)[] = [1, 'a', 'c', 2]
// 由数字和字符串数组组成
let arr4: number | string[] = ['123', '']
