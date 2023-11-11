// TS高级类型

// 1.Intersection Types(交叉类型)

type LeftType = {
  id: number
  left: string
}
type RightType = {
  id: number
  right: string
}
type IntersectionType = LeftType & RightType

function showType(args: IntersectionType) {
  console.log(args)
}
showType({ id: 1, left: 'test', right: 'test' })

// 2.Union Types(联合类型)

type UnionType = string | number

function showType1(arg: UnionType) {
  console.log(arg)
}

showType1('test')
showType1(7)

// 3.Generic Types(泛型)

function showType2<T>(args: T) {
  console.log(args)
}

showType2('test')
showType2(1)

// 泛型接口

interface GenericType<T> {
  id: number
  name: T
}

function showType3(args: GenericType<string>) {
  console.log(args)
}

showType3({ id: 1, name: 'test' })

// Partial<T>：将T类型的所有属性设为可选

interface PartialType {
  id: number
  firstName: string
  lastName: string
}

function showType4(args: Partial<PartialType>) {
  console.log(args)
}

showType4({ id: 1 })

// Required<T>: 将某个类型里的属性全部变为必选项

interface RequiredType {
  id: number
  firstName?: string
  lastName?: string
}

function showType5(args: Required<RequiredType>) {
  console.log(args)
}

showType5({ id: 1, firstName: 'John', lastName: 'Doe' })

// Readonly<T>：将属性变为只读

interface ReadonlyType {
  id: number
  name: string
}

function showType6(args: Readonly<ReadonlyType>) {
  // args.id = 4;  报错
  console.log(args)
}

showType6({ id: 1, name: 'Doe' })

// Pick<T, K>：从一个已存在的类型 T中选择一些属性作为K, 从而创建一个新类型

interface PickType {
  id: number
  firstName: string
  lastName: string
}

function showType7(args: Pick<PickType, 'firstName' | 'lastName'>) {
  console.log(args)
}

showType7({ firstName: 'John', lastName: 'Doe' })

// Omit<T, K>：从类型T中删除K个属性。

interface PickType {
  id: number
  firstName: string
  lastName: string
}

function showType8(args: Omit<PickType, 'firstName' | 'lastName'>) {
  console.log(args)
}

showType8({ id: 7 })

// Extract<T, U>：从T中提取所有可分配给U的属性。

interface FirstType {
  id: number
  firstName: string
  lastName: string
}

interface SecondType {
  id: number
  address: string
  city: string
}

type ExtractType = Extract<keyof FirstType, keyof SecondType>
// Output: "id"

// Exclude<T, U>：从 T 中剔除可以赋值给 U 的类型。

interface FirstType {
  id: number
  firstName: string
  lastName: string
}

interface SecondType {
  id: number
  address: string
  city: string
}

type ExcludeType = Exclude<keyof FirstType, keyof SecondType>
// Output; "firstName" | "lastName"

// Record<K,T>：构造具有给定类型T的一组属性K的类型

interface EmployeeType {
  id: number
  fullname: string
  role: string
}

let employees: Record<number, EmployeeType> = {
  0: { id: 1, fullname: 'John Doe', role: 'Designer' },
  1: { id: 2, fullname: 'Ibrahima Fall', role: 'Developer' },
  2: { id: 3, fullname: 'Sara Duckson', role: 'Developer' },
}

// NonNullable<T>：从 T 中剔除 null 和 undefined

// Mapped Types( 映射类型)

// Type Guards(类型保护)
// 使用in检查参数对象上是否存在属性x。

// Conditional Types(条件类型)
// T extends U ? X : Y , 即如果类型T可以被赋值给类型U，那么结果类型就是X类型，否则为Y类型。
