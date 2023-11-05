// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

var searchRange = function (nums, target) {
  if (nums.includes(target)) {
    index = nums.findIndex((val) => val === target)
    nums.reverse()
    index2 = nums.findIndex((val) => val === target)
    index2 = nums.length - 1 - index2
    return [index, index2]
  } else {
    return [-1, -1]
  }
}
