const obj1 = { a: 1, b: 2, arr: [1, 2, 3], set: new Set([4, 5, 6]) }

const obj2 = structuredClone(obj1)

console.log(obj2)
