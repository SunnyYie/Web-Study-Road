let arr = [3, 7, 7, 1]

// 不改变原数组
let arr2 = arr.toSorted((a, b) => a - b)

let arr3 = arr.toReversed()

let arr4 = arr.toSpliced(1, 1) // 删除第1项数据

let arr5 = arr.with(0, 10) // 更改数组第0项为10

console.log(arr2)
