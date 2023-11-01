interface Person_1 {
  name: string
  fn: (value: number) => string
}
interface Contact {
  phone: string
  fn: (value: string) => string
}
// PersonDetail相当于是fn:(value:number|string)=>string
type PersonDetail = Person_1 & Contact
let obj11: PersonDetail = {
  name: 'sxc',
  phone: '153',
  fn(value: string | number) {
    return 'sxc'
  },
}
obj11.fn(11)
