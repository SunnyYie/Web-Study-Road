var maxProfit = function (prices) {
  let min = prices[0]
  let max = 0
  for (let price of prices) {
    min = Math.min(min, price)
    max = Math.max(max, price - min)
  }
  return max
}

console.log(maxProfit([2, 4, 1]))
