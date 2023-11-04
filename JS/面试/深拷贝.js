function deepClone(obj, cache = new WeakMap()) {
  if (typeof obj !== 'object') return obj
  if (obj === null) return obj
  if (cache.get(obj)) return cache.get(obj) // 防止循环引用进入死循环
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)

  // 找到所属原型上的constructor，指向当前对象的构造函数
  let cloneObj = new obj.constructor()
  cache.set(obj, cloneObj) // 缓存拷贝的对象，用于处理循环引用的情况
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], cache) // 递归拷贝
    }
  }
  return cloneObj
}

const obj = { name: 'Jack', address: { x: 100, y: 200 } }
obj.a = obj // 循环引用
const newObj = deepClone(obj)
console.log(newObj.address === obj.address) // false
