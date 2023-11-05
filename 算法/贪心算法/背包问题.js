// 可以简单地通过物品的单价除以单位体积来确定物品的价值，先装价值最高的物品直到该物品装完或者将背包装满，接着装价值次高的物品，直到 这种物品也装完或将背包装满，以此类推。

function ksack(values, weights, capacity, len) {
  var load = 0
  var i = 0
  var w = 0
  while (load < capacity && i < len) {
    if (weights[i] <= capacity - load) {
      w += values[i]
      load += weights[i]
    } else {
      var r = (capacity - load) / weights[i]
      w += r * values[i]
      load += weights[i]
    }
    ++i
  }
  return w
}

var items = ['A', 'B', 'C', 'D']
var values = [50, 140, 60, 60]
var weights = [5, 20, 10, 12]
var capacity = 30

console.log(ksack(values, weights, capacity, items.length))
