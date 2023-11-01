interface Props {
  id: string
  children: number[]
}

// 1.Partial用来构造一个类型，将Type的所有属性设置为可选
type PartialProps = Partial<Props>

let p1: PartialProps = { children: [] }
let p2: Props = { id: '', children: [] }

// 2.Readonly用来构造一个类型，将Type的所有属性设置为只读
interface Props1 {
  id: string
  children: number[]
}
type ReadonlyProps = Readonly<Props1>

let p3: ReadonlyProps = { id: '1', children: [] }
// p3.id = '2'

// 3.Pick<Type,Keys>从Type中选择一组属性来构造新类型
interface Props2 {
  id: string
  children: number[]
  title: string
}
type PickProps = Pick<Props2, 'id' | 'title'>

let p4: PickProps = { id: '1', title: '' }

// 4.Record构造一个对象类型，属性键为Keys，属性类型为Type
type RecordProps = Record<'a' | 'b' | 'c', string[]>

let obj: RecordProps = {
  a: ['1'],
  b: ['2'],
  c: ['3'],
}
