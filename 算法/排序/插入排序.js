function insertSort(arr) {
  let tem

  for (let i = 0; i < arr.length; i++) {
    tem = arr[i]

    for (let j = i; j >= 0; j--) {
      if (arr[j - 1] > tem) {
        arr[j] = arr[j - 1]
      } else {
        arr[j] = tem

        break
      }
    }
  }

  return arr
}

