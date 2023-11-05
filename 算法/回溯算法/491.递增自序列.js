// 给你一个整数数组 nums ，找出并返回所有该数组中不同的递增子序列，递增子序列中 至少有两个元素 。你可以按 任意顺序 返回答案。

// 数组中可能含有重复元素，如出现两个整数相等，也可以视作递增序列的一种特殊情况。

var findSubsequences = function (nums) {
  let result = [],
    path = []
  function backtracking(index) {
    if (path.length > 1) {
      result.push(path.slice())
    }
    let uset = []
    for (let i = index; i < nums.length; i++) {
      // 如果当前元素小于path数组的最后一个，或者当前数已经使用过了
      if ((path.length && nums[i] < path[path.length - 1]) || uset[nums[i] + 100]) {
        continue
      }
      uset[nums[i] + 100] = true
      path.push(nums[i])
      backtracking(i + 1)
      path.pop()
      // 注意，这里并没有对uset数组进行pop操作
    }
  }
  backtracking(0)
  return result
}
