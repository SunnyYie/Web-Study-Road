var generateMatrix = function (n) {
  let arr = new Array(n).fill(0).map(() => new Array(n).fill(0))
  let left = 0,
    right = n - 1,
    top = 0,
    bottom = n - 1
  let num = 1
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      arr[top][i] = num
      num++
    }
    for (let j = top + 1; j <= bottom; j++) {
      arr[j][right] = num
      num++
    }
    if (left < right && top < bottom) {
      for (let i = right - 1; i > left; i--) {
        arr[bottom][i] = num
        num++
      }
      for (let j = bottom; j > top; j--) {
        arr[j][left] = num
        num++
      }
    }
    left++
    right--
    top++
    bottom--
  }
  return arr
}
