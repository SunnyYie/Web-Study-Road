// 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

var rotate = function (nums, k) {
  let len = nums.length
  k = k % len
  let temp = nums.splice(len - k, k)
  nums.unshift(...temp)
  return nums
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
