// 在一条环路上有 n 个加油站，其中第 i 个加油站有汽油 gas[i] 升。

// 你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。

// 如果你可以按顺序绕环路行驶一周，则返回出发时加油站的编号

var canCompleteCircuit = function (gas, cost) {
  let left = 0,
    start = 0,
    totalGas = 0,
    totalCost = 0
  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i]
    totalCost += cost[i]
    left += gas[i] - cost[i]
    // 如果 left 累加 gas[i]−cost[i]后，小于 0。则出发点到站i都不是起点
    if (left < 0) {
      start = i + 1
      left = 0
    }
  }
  // 如果总加油量大于等于总耗油量，问题一定有解。
  if (totalGas < totalCost) {
    return -1
  }
  return start
}
