function package(bagWeight, value, weight) {
  let res = []
  // 填满第一行
  for (let j = 0; j <= bagWeight; j++) {
    res[j] = j >= bagWeight ? value[0] : 0
  }
  // 填满剩余行
  for (let i = 1; i < value.length; i++) {
    // next为每一行的数组
    const next = []
    for (let j = 0; j <= bagWeight; j++) {
      // 判断放不放第i件物品
      next[j] = j < weight[i] ? res[j] : Math.max(res[j], value[i] + res[j - weight[i]])
    }
    res = next
  }
  return res[bagWeight]
}

const res = package(7, [5, 10, 3, 7, 4], [2, 5, 1, 4, 3])

console.log(res)
