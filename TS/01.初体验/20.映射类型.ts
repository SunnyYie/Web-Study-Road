// 基于旧类型创建新类型
// 映射类型只能在类型别名中使用，不能在接口中使用

type PropKeys = 'x' | 'y' | 'z'
// Key in PropKeys相当于for in(let k in obj)
type Type1 = { [Key in PropKeys]: number }

type Props0 = { a: number; b: string; c: boolean }
// keyof Props0获取对象类型Props中所有键的联合类型，即'a'|'b'|'c'
type Type2 = { [key in keyof Props0]: number }

// Partial基于映射类型实现的
type myPartial<T> = {
  // keyof T 相当于'a'|'b'|'c'，T[P]相当于每个键对应的类型
  [P in keyof T]?: T[P]
}

type Props01 = { a: number; b: string; c: boolean }
type PartialProps1 = myPartial<Props01>
