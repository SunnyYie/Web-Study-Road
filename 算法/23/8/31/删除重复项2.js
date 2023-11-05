var removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length
  let i = 2,
    j = 2
  while (j < nums.length) {
    if (nums[i - 2] != nums[j]) {
      nums[i] = nums[j]
      ++i
    }
    ++j
  }
  return i
}
