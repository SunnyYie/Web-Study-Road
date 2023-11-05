// n 个孩子站成一排。给你一个整数数组 ratings 表示每个孩子的评分。
// 每个孩子至少分配到 1 个糖果。相邻两个孩子评分更高的孩子会获得更多的糖果。
// 计算并返回需要准备的 最少糖果数目 。

var candy = function (ratings) {
  let res = new Array(ratings.length).fill(0)
  for (let i = 0; i < ratings.length; i++) {
    if (i > 0 && ratings[i] > ratings[i - 1]) {
      res[i] = res[i - 1] + 1
    } else {
      res[i] = 1
    }
  }

  let right = 0,
    ret = 0
  for (let i = ratings.length - 1; i >= 0; i--) {
    if (i < ratings.length - 1 && ratings[i] > ratings[i + 1]) {
      right++
    } else {
      right = 1
    }
    ret += Math.max(res[i], right)
  }

  return ret
}
