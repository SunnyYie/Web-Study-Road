function selectSort(arr) {
  let len = arr.length,
    minIndex,
    tem

  for (let i = 0; i < len - 1; i++) {
    minIndex = i

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }

    // 交换位置

    tem = arr[i]

    arr[i] = arr[minIndex]

    arr[minIndex] = tem
  }

  return arr
}
