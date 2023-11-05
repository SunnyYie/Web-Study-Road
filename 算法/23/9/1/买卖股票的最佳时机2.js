var maxProfit = function (prices) {
  let money = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      money += prices[i] - prices[i - 1]
    }
  }
  return money
}
