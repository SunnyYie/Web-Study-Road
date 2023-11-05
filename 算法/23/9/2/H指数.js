// 给你一个整数数组 citations ，其中 citations[i] 表示研究者的第 i 篇论文被引用的次数。计算并返回该研究者的 h 指数。

var hIndex = function (citations) {
  citations.sort((a, b) => b - a)
  let h = 0
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] > h) {
      h++
    }
  }
  return h
}
