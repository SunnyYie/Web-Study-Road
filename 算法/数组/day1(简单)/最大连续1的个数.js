var findMaxConsecutiveOnes = function (nums) {
  let left = 0,
    right = 0
  let maxlen = 0
  while (right < nums.length) {
    if (nums[right] === 1) {
      if (nums[left] === 1) {
        maxlen = Math.max(maxlen, right - left + 1)
      } else {
        maxlen = Math.max(maxlen, right - left)
      }
    } else {
      left = right
    }
    right++
  }
  return maxlen
}
