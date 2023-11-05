function merge(left, right) {
  let tem = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      tem.push(left.shift())
    } else {
      tem.push(right.shift())
    }
  }
  return tem.concat(left, right)
}

function mergeSort(arr) {
  const len = arr.length
  if (len < 2) return arr

  let mid = Math.floor(len / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

