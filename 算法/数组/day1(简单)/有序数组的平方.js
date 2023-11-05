// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

var sortedSquares = function (nums) {
  let n = nums.length
  let res = new Array(n).fill(0)
  let i = 0,
    j = n - 1,
    k = n - 1
  while (i <= j) {
    let left = nums[i] * nums[i],
      right = nums[j] * nums[j]
    if (left < right) {
      res[k--] = right
      j--
    } else {
      res[k--] = left
      i++
    }
  }
  return res
}
