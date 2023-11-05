function countingSort(arr) {
  let len = arr.length,
    b = [],
    c = [],
    min = (max = arr[0])

  for (let i = 0; i < len; i++) {
    min = min <= arr[i] ? min : arr[i]

    max = max >= arr[i] ? max : arr[i]

    c[arr[i]] = c[arr[i]] ? c[arr[i]] + 1 : 1 // 计数
  }

  for (let i = min; i < max; i++) {
    c[i + 1] = (c[i + 1] || 0) + (c[i] || 0)
  }

  for (let i = len - 1; i >= 0; i--) {
    b[c[arr[i]] - 1] = arr[i]

    c[arr[i]]--
  }

  return b
}
