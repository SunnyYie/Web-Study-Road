var productExceptSelf = function (nums) {
  let res = []
  res[0] = 1
  for (let i = 1; i < nums.length; i++) {
    // 求出当前值左侧数的乘积
    // index:1    res[1] = nums[0]
    // index:2    res[2] = res[1]*nums[1]
    // index:3    res[3] = res[2]*nums[2]
    res[i] = res[i - 1] * nums[i - 1]
  }
  let right = 1
  for (let j = nums.length - 1; j >= 0; j--) {
    // 求出当前数右侧的乘积
    // index:3    res[3] = res[3]
    // index:2    res[2] = res[2]*nums[3]
    // index:1    res[1] = res[1]*nums[3]*nums[2]

    res[j] *= right
    right *= nums[j]
  }
  return res
}
