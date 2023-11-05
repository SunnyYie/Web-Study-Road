// 找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：

// 只使用数字1到9
// 每个数字 最多使用一次
// 返回 所有可能的有效组合的列表 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。

let path = []

let res = []

var combinationSum3 = function (k, n) {
  res = []
  backtracking(n, k, 0, 1)
  return res
}

var backtracking = (n, k, sum, startIndex) => {
  if (sum > n) {
    return
  }
  if (path.length === k) {
    if (sum === n) {
      res.push([...path])
      return
    }
  }
  for (let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
    sum += i
    path.push(i)
    backtracking(n, k, sum, i + 1)
    sum -= i
    path.pop()
  }
}

const sum = combinationSum3(3, 9)
console.log(sum);
