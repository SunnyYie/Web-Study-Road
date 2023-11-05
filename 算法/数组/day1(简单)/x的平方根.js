var mySqrt = function (x) {
  let left = 0,
    right = x,
    mid = 0,
    ans = 0
  while (left <= right) {
    mid = Math.floor((right + left) / 2)
    let square = mid * mid
    if (square < x) {
      ans = mid
      left = mid + 1
    } else if (square > x) {
      right = mid - 1
    } else {
      return mid
    }
  }
  return ans
}
