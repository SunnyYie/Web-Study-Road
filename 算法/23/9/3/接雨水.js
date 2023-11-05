// 如果 height[left]<height[right]，则必有 leftMax<rightMax，下标left处能接的雨水量等于 leftMax−height[left]

var trap = function (height) {
  let res = 0
  let left = 0,
    right = height.length - 1
  let leftMax = 0,
    rightMax = 0
  while (left < right) {
    leftMax = Math.max(leftMax, height[left])
    rightMax = Math.max(rightMax, height[right])
    if (height[left] < height[right]) {
      res += leftMax - height[left]
      ++left
    } else {
      res += rightMax - height[right]
      --right
    }
  }
  return res
}
