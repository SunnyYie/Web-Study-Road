var jump = function (nums) {
  let step = 0
  let maxJumpIndex = 0
  // 边界
  let end = 0
  for (let i = 0; i < nums.length - 1; i++) {
    maxJumpIndex = Math.max(maxJumpIndex, nums[i] + i)
    if (i == end) {
      end = maxJumpIndex
      step++
    }
  }

  return step
}
