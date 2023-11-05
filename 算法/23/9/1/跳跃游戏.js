// 给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。

var canJump = function (nums) {
  // 记录最大能抵达的索引
  let maxJumpIndex = 0
  for (let i = 0; i < nums.length; i++) {
    // 如果maxJumpIndex大于等于当前元素索引，证明能抵达当前元素
    if (i <= maxJumpIndex) {
      // 获得当前元素能跳转到的最大索引值
      maxJumpIndex = Math.max(maxJumpIndex, nums[i] + i)
      // 当maxJumpIndex大于等于了数组最大索引，证明能抵达终点，返回结果true
      if (maxJumpIndex >= nums.length - 1) return true
    } else {
      return false
    }
  }
}
