// 给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。

// 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：

// “123”
// “132”
// “213”
// “231”
// “312”
// “321”
// 给定 n 和 k，返回第 k 个排列。

var getPermutation = function (n, k) {
  const path = []
  let count = 0
  function backtracking(used) {
    if (path.length === n) {
      count++
      if (count === k) {
        return path.join('')
      }
      return
    }
    for (let i = 1; i <= n; i++) {
      if (used[i]) continue
      path.push(i)
      used[i] = true
      const res = backtracking(used)
      path.pop()
      used[i] = false
      if (res) {
        return res
      }
    }
  }

  return backtracking([])
}
