var c = 100 // 背包最大容量
var n = 5 // 代表有5个物品
var w = [10, 20, 30, 40, 60] //代表5个物品的重量
var v = [20, 30, 65, 40, 60] //代表5个物品的价值
var path = [] // 来记录树中的移动路径，为1的时候表示选择该数据，为0表示不选择
var maxvalue = 0 // 背包的最大权重值
function search(i) {
  // 表示递归深度
  if (i >= n) {
    checkMax() //检查最大值
  } else {
    path[i] = 0
    search(i + 1)
    path[i] = 1
    search(i + 1)
  }
}
function checkMax() {
  var weight = 0,
    value = 0
  for (var i = 0; i < n; i++) {
    if (path[i] == 1) {
      weight += w[i]
      value += v[i]
    } else {
      path[i] == 0
    }
  }
  if (weight <= c) {
    // 判断是否达到上限
    if (value >= maxvalue) {
      maxvalue = value
      console.log('最大价值为' + maxvalue)
      console.log('所选物品（1为选中，0代表不选）：')
      console.log(path)
    }
  }
}
search(0)
