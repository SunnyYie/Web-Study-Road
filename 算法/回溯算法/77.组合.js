// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

// 示例 1：

// 输入：n = 4, k = 2
// 输出：
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

let path = []

let res = []

var combine = function (n, k) {
  res = []
  combineHelper(n, k, 1)
  return res
}

const combineHelper = (n, k, startIndex) => {
  if (path.length === k) {
    res.push([...path])
    return
  }
  //path.length是已经选择的元素的个数 ，k-path.length是还需要元素的个数 , 在集合n中至多要从该起始位置 : n - (k - path.size()) + 1，开始遍历
  for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
    path.push(i)
    combineHelper(n, k, i + 1)
    //删除数组末尾元素
    path.pop()
  }
}

const arr = combine(4, 3)
console.log(arr)
