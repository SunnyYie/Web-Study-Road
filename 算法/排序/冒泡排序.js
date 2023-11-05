function bubbleSort(arr) {
  const len = arr.length

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] // 交换位置
      }
    }
  }

  return arr
}

console.log(bubbleSort([3, 44, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]))
