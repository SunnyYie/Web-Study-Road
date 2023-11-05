function curry(fn, ...args) {
  return (...rest) => {
    const allArgs = [...args, ...rest]
    if (allArgs.length >= fn.length) {
      return fn(...allArgs)
    } else {
      return curry(fn, ...allArgs)
    }
  }
}

const sum = (a, b, c) => a + b + c

console.log(curry(sum)(1)(2)(3))
