// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

// 示例 1:
// 输入: nums = [-1,0,3,5,9,12], target = 9
// 输出: 4
// 解释: 9 出现在 nums 中并且下标为 4

// 示例 2:
// 输入: nums = [-1,0,3,5,9,12], target = 2
// 输出: -1
// 解释: 2 不存在 nums 中因此返回 -1

function search(nums, target) {
  let left = 0,
    right = nums.length - 1,
    mid
  while (left <= right) {
    // ((right-left)>>1):这个表达式的含义是将 left 和 right 之间的差值右移 1 位，并将最高位清零。
    // mid = left + ((right - left) >> 1)
    mid = (left + right) / 2
    if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return -1
}

console.log(search([1, 2, 3, 4, 6, 7, 9], 7))
