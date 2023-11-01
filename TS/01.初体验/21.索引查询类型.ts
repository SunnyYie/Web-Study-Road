type Props02 = { a: number; b: string; c: boolean }
// 用来查询属性的类型
type Type = Props02['a']

type Type3 = Props02['a' | 'b']

type Type4 = Props02[keyof Props02]
