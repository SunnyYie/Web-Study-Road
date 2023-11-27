let person = { name: 'sxc', age: 24 }

let personProxy = new Proxy(person, {
  // 取值
  get(target, key) {
    if (target.age <= 18) {
      return Reflect.get(target, key)
    }
  },
  // 赋值
  set(target, key, value, receiver) {
    return true
  },
  // 拦截函数调用
  apply() {},
  // 拦截删除操作
  deleteProperty(target, p) {
    return true
  },
})
