function isAsyncFunction(func) {
  const str = Object.prototype.toString.call(func)
  // 第一种
  console.log(str === '[object Function]')
  // 第二种
  console.log(func[Symbol.toStringTag] === 'AsyncFunction')
}

// 原型是Funtion
isAsyncFunction(() => {})
// 原型是AsyncFunction
isAsyncFunction(async () => {})
