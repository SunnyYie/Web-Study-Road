class A {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

class B {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

class Container {
  mode: any
  constructor() {
    this.mode = {}
  }

  provide(key: string, mode: any) {
    this.mode[key] = mode
  }

  get(key: string) {
    return this.mode[key]
  }
}

const mode = new Container()
mode.provide('a', new A('sxc'))

mode.provide('b', new B('sxy'))

class C {
  a: any
  b: any
  constructor(mode: Container) {
    this.a = mode.get('a')
    this.b = mode.get('b')
  }
}

const c = new C(mode)

console.log(c.a, c.b)
