// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

function searchInsert(nums, target) {
  let mid,
    left = 0,
    right = nums.length - 1,
    ans = nums.length

  while (left <= right) {
    mid = left + Math.floor((right - left) >> 1)
    if (nums[mid] < target) {
      left = mid + 1
    } else {
      ans = mid
      right = mid - 1
    }
  }
  return ans
}

console.log(searchInsert([1, 3, 5, 6], 4))
